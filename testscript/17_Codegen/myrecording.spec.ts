import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('link', { name: 'Gmail' }).click();
  await page.getByRole('img', { name: 'Gmail inbox screen with' }).click();
  await page.getByRole('banner').getByRole('link', { name: 'Visit the Gmail product page' }).click();
});


// npx playwright codegen -o tests/17_Codegen/myrecording.spec.ts