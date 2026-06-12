import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { HomePage } from "./HomePage";

export class DownloadPage extends BasePage {
  constructor(page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'Download'  });
    this.downloadLink = page.getByRole('link', { name: 'Download' });
    this.latestReleases = page.locator('#content').getByRole('heading', { name: 'Latest releases', exact: true });
    this.zipLink = page.getByRole('link', { name: /redmine-.*\.zip/ }).first();
    this.tarGzLink = page.getByRole('link', { name: /redmine-.*\.tar\.gz/ }).first();
  }

  async openDownload() {
    const homePage = new HomePage(this.page);
    await homePage.openHome();
    await this.downloadLink.click();
    await this.page.waitForLoadState('networkidle');
    
  }

  async expectReleaseArtifactsVisible() {
    await expect(this.heading).toBeVisible();
    await expect(this.latestReleases).toBeVisible();
    await expect(this.zipLink).toBeVisible();
    await expect(this.tarGzLink).toBeVisible();
  }
}