import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.redmineHeading = page.getByRole('heading', { name: 'Redmine' }).first();
    this.downloadLink = page.getByRole('link', { name: 'Download' });
    this.issuesLink = page.getByRole('link', { name: 'Issues' });
    this.wikiLink = page.getByRole('link', { name: 'Wiki', exact: true });
    this.forumsLink = page.getByRole('link', { name: 'Forums', exact: true });
    this.searchInput = page.getByRole('textbox', { name: /search/i });
  }

  async openHome() {
    const response = await this.page.goto('/'); 
    expect(response.status()).toBe(200);        
    await this.page.waitForLoadState('networkidle');
  }

  async expectMainNavigationVisible() {
    await expect(this.redmineHeading).toBeVisible();
    await expect(this.downloadLink).toBeVisible();
    await expect(this.issuesLink).toBeVisible();
    await expect(this.wikiLink).toBeVisible();
    await expect(this.forumsLink).toBeVisible();
  }

  async search(text) {
    await this.searchInput.fill(text);
    await this.searchInput.press('Enter');
  }
}