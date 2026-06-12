import { test } from '@playwright/test';
import { WikiPage } from '../pages/WikiPage';

test('TC-004 wiki page shows project content', async ({ page }) => {
  const wikiPage = new WikiPage(page);

  await wikiPage.openWikiStartPage();
  await wikiPage.expectWikiContentVisible();
});