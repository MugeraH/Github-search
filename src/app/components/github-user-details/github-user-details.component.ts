import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../users';
import { ActivatedRoute } from '@angular/router';
import { GithubDataService } from '../../services/github-data.service';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css'],
})
export class GithubUserDetailsComponent implements OnInit {
  userName: string = '';
  isError: boolean = false;
  userNameLink: any = 'mugerah';
  userData: Users;
  showUserDetails: boolean = false;

  isLoading: boolean = true;
  constructor(
    private router: ActivatedRoute,
    private dataService: GithubDataService
  ) {}

  getUserData() {
    if (this.userName === '') {
      this.isLoading = false;
      this.isError = true;
      return;
    }
    this.showUserDetails = true;
    this.isLoading = true;
    this.dataService.getUserData(this.userName).then((data) => {
      this.isLoading = false;
      this.isError = false;
      this.userData = data;
      console.log(data.login);
    });
    this.userName = '';
  }

  ngOnInit() {
    this.isLoading = true;
    this.userName = 'mugerah';

    this.userNameLink = this.router.snapshot.paramMap.get('login');

    this.dataService.getUserData(this.userNameLink).then((data) => {
      this.showUserDetails = true;

      if (data.login === 'null') {
        this.getUserData();
        this.userName = '';
        this.isLoading = false;
        return;
      }

      this.userData = data;
      this.isLoading = false;
      this.userName = '';

      console.log(data);
    });
  }
}
