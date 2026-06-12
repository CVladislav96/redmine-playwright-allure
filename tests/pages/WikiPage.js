import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomePage } from "./HomePage";

export class WikiPage extends BasePage {
  constructor(page) {
    super(page);
    this.wikiLink = page.getByRole('link', { name: 'Wiki', exact: true });
    this.redmineHeading = page.getByRole('heading', { name: 'Redmine' }).first();
    this.featuresSection = page.getByRole('heading', { name: 'Features' });
    this.documentationSection = page.getByRole('heading', { name: 'Documentation' });
  }

  async openWikiStartPage() {
    const homePage = new HomePage(this.page);
    await homePage.openHome();
    await this.wikiLink.click();
    await this.page.waitForLoadState('networkidle');
  }

  async expectWikiContentVisible() {
    await expect(this.redmineHeading).toBeVisible();
    await expect(this.featuresSection).toBeVisible();
    await expect(this.documentationSection).toBeVisible();
  }
}