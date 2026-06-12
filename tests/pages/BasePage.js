export class BasePage {
  constructor(page) {
    this.page = page;
    this.baseUrl = 'https://www.redmine.org';
  }

  async open(path = '/') {
    await this.page.goto(`${this.baseUrl}${path}`);
  }
}