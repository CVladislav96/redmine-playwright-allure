import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('TC-001 home page loads with status 200 and has main navigation', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.openHome();
  await homePage.expectMainNavigationVisible();
});
