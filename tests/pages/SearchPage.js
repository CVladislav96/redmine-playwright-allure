import { expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SearchPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Search' });
    this.queryInput = page.locator('input[name="q"]');
    this.content = page.locator('#content');
  }

  async expectResultsFor(query) {
    await expect(this.page).toHaveURL(/\/search/);
    await expect(this.heading).toBeVisible();
    await expect(this.page.locator('#search-results')).toContainText('Redmine');
    await expect(this.content).toContainText(new RegExp(query, 'i'));
  }
}