import { test } from '@playwright/test';
import { DownloadPage } from '../pages/DownloadPage';

test('TC-002 download page shows release artifacts', async ({ page }) => {
  const downloadPage = new DownloadPage(page);

  await downloadPage.openDownload();
  await downloadPage.expectReleaseArtifactsVisible();
});