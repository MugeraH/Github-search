export class Users {
  constructor(
    public url: string,
    public login: string,
    public html_url: string,
    public avatar_url: string,
    public loaction: string,
    public public_repos: number,
    public followers: any,
    public following: any,
    public created_at: Date
  ) {}
}
