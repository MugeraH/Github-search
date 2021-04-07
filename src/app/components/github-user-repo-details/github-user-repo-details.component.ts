import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import { Repo } from '../../repo';

@Component({
  selector: 'app-github-user-repo-details',
  templateUrl: './github-user-repo-details.component.html',
  styleUrls: ['./github-user-repo-details.component.css'],
})
export class GithubUserRepoDetailsComponent implements OnInit {
  searchTerm: string = '';
  isError: boolean = false;
  isDataError: boolean = false;
  repoData: Repo[];
  arrayData: any;
  isLoading: boolean = false;
  constructor(private dataService: GithubDataService) {}

  ngOnInit(): void {}

  getUserData() {
    this.isLoading = true;
    this.isError = false;
    this.isDataError = false;

    if (this.searchTerm === '') {
      this.isLoading = false;
      this.isError = true;
      return;
    }

    this.isLoading = true;

    this.dataService.getRepoData(this.searchTerm).then((data) => {
      this.isLoading = false;
      this.arrayData = Object.entries(data);
      let repositoryData = this.arrayData[2];

      let convertRepositoryData =
        repositoryData[Object.keys(repositoryData)[1]];

      if (convertRepositoryData.length == 0) {
        this.isDataError = true;
        return;
      }
      this.repoData = convertRepositoryData;
    });
    this.searchTerm = '';
  }
}
