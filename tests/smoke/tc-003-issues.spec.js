import { test } from '@playwright/test';
import { IssuesPage } from '../pages/IssuesPage';

test('TC-003 issues list is available', async ({ page }) => {
  const issuesPage = new IssuesPage(page);

  await issuesPage.openIssues();
  await issuesPage.expectIssueListVisible();
});