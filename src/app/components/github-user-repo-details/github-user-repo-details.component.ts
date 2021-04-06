import { Component, OnInit } from '@angular/core';
import { GithubDataService } from '../../services/github-data.service';
import { Repo } from '../../repo';

@Component({
  selector: 'app-github-user-repo-details',
  templateUrl: './github-user-repo-details.component.html',
  styleUrls: ['./github-user-repo-details.component.css'],
})
export class GithubUserRepoDetailsComponent implements OnInit {
  userName: string = '';
  isError:boolean= false
  repoData: Repo[];

  isLoading: boolean = false;
  constructor(private dataService: GithubDataService) {}

  ngOnInit(): void {}

  getUserData() {
    this.isLoading = true;

    if (this.userName === '') {
      this.isLoading = false;
      this.isError= true
    }

    this.dataService.getRepoData(this.userName).then((data) => {
      this.isLoading = false;
      this.isError=false
      this.repoData = data;
    });
    this.userName = '';
  }
}
