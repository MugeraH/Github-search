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

  //   let promise = new Promise((resolve,reject)=>{
  //     this.users = [];
  //     this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
  //       (results)=>{
  //       this.users.push(results);
  //       console.log(results)
  //       resolve();
  //     },error=>{

  //       reject(error);
  //     }
  //     )
  //   })
  //   return promise;
  // }

  getUserData(username: string) {
    return this.http
      .get<Users>(
        //  `https://api.github.com/users/${username}?access_token=${this.token}`
        `https://api.github.com/users/${username}`
      )
      .toPromise();
  }

  getRepoData(username: string) {
    return this.http
      .get<Repo[]>(
        ` https://api.github.com/users/${username}/repos?order=created&sort=asc?access_token=${this.token}`
      )
      .toPromise();
  }
}
