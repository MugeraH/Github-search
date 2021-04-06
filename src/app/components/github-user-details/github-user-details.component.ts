import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-user-details',
  templateUrl: './github-user-details.component.html',
  styleUrls: ['./github-user-details.component.css'],
})
export class GithubUserDetailsComponent implements OnInit {
  userName: string;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    let userName = this.router.snapshot.paramMap.get('login');
    console.log('help');
    console.log(userName);
  }
}
