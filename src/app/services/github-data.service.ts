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

  getUserData(username: string): Observable<any> {
    return this.http.get(
      `https://api.github.com/users/${username}?access_token=${this.token}`
    );
  }

  getRepoData(username: string): Observable<any> {
    return this.http.get(
      ` https://api.github.com/users/${username}/repos?order=created&sort=asc?access_token=${this.token}`
    );
  }
}
