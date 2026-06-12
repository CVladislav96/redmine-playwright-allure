import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomePage } from "./HomePage";

export class IssuesPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Issues' });
    this.issuesLink = page.getByRole('link', { name: 'Issues' });
    this.filters = page.getByText('Filters');
    this.applyButton = page.getByRole('link', { name: 'Apply', exact: true });
    this.firstIssueRow = page.locator('table.issues tbody tr').first();
  }

  async openIssues() {
    const homePage = new HomePage(this.page);
    await homePage.openHome();
    await this.issuesLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async expectIssueListVisible() {
    await expect(this.heading).toBeVisible();
    await expect(this.filters).toBeVisible();
    await expect(this.applyButton).toBeVisible();
    await expect(this.firstIssueRow).toBeVisible();
    await expect(this.firstIssueRow).toContainText(/\d{4,}/);
  }
}