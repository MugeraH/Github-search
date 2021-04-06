import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import { Repo } from '../../repo';

@Component({
  selector: 'app-github-user-repo-details',
  templateUrl: './github-user-repo-details.component.html',
  styleUrls: ['./github-user-repo-details.component.css'],
})
export class GithubUserRepoDetailsComponent implements OnInit {
  userName: string = 'deepeters';
  repoData: [];
  constructor(private dataService: GithubDataService) {}

  ngOnInit(): void {}

  getUserData() {
    this.dataService.getRepoData(this.userName).subscribe((data) => {
      this.repoData = data;
      console.log('help');

      console.log(this.repoData);
    });
  }
}
