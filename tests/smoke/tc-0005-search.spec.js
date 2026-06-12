import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';

test('TC-005 search returns results for installation', async ({ page }) => {
  const homePage = new HomePage(page);
  const searchPage = new SearchPage(page);

  await homePage.openHome();
  await homePage.search('installation');
  await searchPage.expectResultsFor('installation');
});