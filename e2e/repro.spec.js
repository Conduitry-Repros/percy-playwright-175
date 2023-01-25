import { test } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('relative assets after history.pushState()', async ({ page }) => {
	await page.goto('http://localhost:8000/foo/');
	await page.evaluate(() => history.pushState('', null, '/'));
	await percySnapshot(page, 'relative assets after history.pushState()');
});
