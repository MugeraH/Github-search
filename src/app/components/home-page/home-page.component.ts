import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import { Users } from '../../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userData: Users;
  myData: {};
  userRepoData: Users[];
  searchTerm: string = '';
  constructor(private dataService: GithubDataService, private router: Router) {}

  ngOnInit(): void {}

  getUserData() {
    this.dataService.getUserData(this.searchTerm).subscribe((data) => {
      this.userData = data;
      this.router.navigate(['/searchUser', this.userData.login]);
    });
  }
  getUserRepoData() {
    this.dataService.getRepoData(this.searchTerm).subscribe((data) => {
      this.userRepoData = data;
      console.log(this.userRepoData);
    });
  }
}
