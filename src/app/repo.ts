export class Repo {
  constructor(
    public owner: {},
    public name: string,
    public html_url: string,
    public description: string,
    public forks: string,
    public watchers_count: number,
    public language: any,
    public created_at: Date
  ) {}
}
