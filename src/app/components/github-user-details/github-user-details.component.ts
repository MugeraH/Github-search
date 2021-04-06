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
  userName: any;
  userData: Users[];
  constructor(
    private router: ActivatedRoute,
    private dataService: GithubDataService
  ) {}

  getUserData() {
    this.dataService.getUserData(this.userName).subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }

  ngOnInit() {
    this.userName = this.router.snapshot.paramMap.get('login');

    this.dataService.getUserData(this.userName).subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });
  }
}
