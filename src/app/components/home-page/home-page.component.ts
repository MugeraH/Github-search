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
  isLoading: boolean = false;
  constructor(private dataService: GithubDataService, private router: Router) {}

  ngOnInit(): void {}

  getUserData() {
    this.isLoading = true;
    this.dataService.getUserData(this.searchTerm).then((data) => {
      this.userData = data;
      this.router.navigate(['/searchUser', this.userData.login]);
    });
  }
}
