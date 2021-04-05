import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubUserRepoDetailsComponent } from './github-user-repo-details.component';

describe('GithubUserRepoDetailsComponent', () => {
  let component: GithubUserRepoDetailsComponent;
  let fixture: ComponentFixture<GithubUserRepoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubUserRepoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubUserRepoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
