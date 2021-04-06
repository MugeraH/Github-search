import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GithubUserDetailsComponent } from './components/github-user-details/github-user-details.component';
import { GithubUserRepoDetailsComponent } from './components/github-user-repo-details/github-user-repo-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'searchUser' },
  { path: 'home', component: HomePageComponent },
  { path: 'searchUser/:login', component: GithubUserDetailsComponent },
  { path: 'searchUser', component: GithubUserDetailsComponent },
  { path: 'searchUserRepositories', component: GithubUserRepoDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
