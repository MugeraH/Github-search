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
  userName: string = 'mugerah';
  userNameLink: any = 'mugerah';
  userData: Users;
  showUserDetails: boolean = false;
  constructor(
    private router: ActivatedRoute,
    private dataService: GithubDataService
  ) {}

  getUserData() {
    this.showUserDetails = true;
    this.dataService.getUserData(this.userName).subscribe((data) => {
      this.userData = data;
    });
  }

  ngOnInit() {
    this.userNameLink = this.router.snapshot.paramMap.get('login');
    this.dataService.getUserData(this.userNameLink).subscribe((data) => {
      this.showUserDetails = true;
      this.userData = data;
    });
  }
}
