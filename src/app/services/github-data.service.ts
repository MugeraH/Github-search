import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../users';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root',
})
export class GithubDataService {
  token: string = environment.accessToken;

  constructor(private http: HttpClient) {}

  getUserData(username: string) {
    return this.http
      .get<Users>(
        //`https://api.github.com/users/${username}?access_token=${this.token}`
         `https://api.github.com/users/${username}`
      )
      .toPromise();
  }

  getUserRepoData(username: string) {
    return this.http
      .get<Repo[]>(
        ` https://api.github.com/users/${username}/repos?order=created&sort=asc?access_token=${this.token}`
      )
      .toPromise();
  }

  getRepoData(searchterm: string) {
    return this.http
      .get<Repo[]>(
        `https://api.github.com/search/repositories?q=${searchterm}?order=created&sort=asc?acess_token=$this.token/page=1&per_page=100`
      )
      .toPromise();
  }
}
