import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GithubUserDetailsComponent } from './components/github-user-details/github-user-details.component';
import { GithubUserRepoDetailsComponent } from './components/github-user-repo-details/github-user-repo-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateCountPipe } from './date-count.pipe';
import { HighlightHoverDirective } from './highlight-hover.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomePageComponent,
    GithubUserDetailsComponent,
    GithubUserRepoDetailsComponent,
    NavbarComponent,
    DateCountPipe,
    HighlightHoverDirective,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
