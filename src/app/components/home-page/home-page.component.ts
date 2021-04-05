import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import { Users } from '../../users';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  userData: Users[];
  userRepoData: Users[];
  searchTerm: string = 'MugeraH';
  constructor(private dataService: GithubDataService) {}

  ngOnInit(): void {
    this.getUserData();
    this.getUserRepoData();
  }

  getUserData() {
    this.dataService.getUserData(this.searchTerm).subscribe((data) => {
      this.userData = data;

      console.log(this.userData);
    });
  }
  getUserRepoData() {
    this.dataService.getRepoData(this.searchTerm).subscribe((data) => {
      this.userRepoData = data;
      console.log(this.userRepoData);
    });
  }
}
