import { test } from '@playwright/test';

test('play Dhun Song | Saiyaara for 50 seconds', async ({ page }) => {
    test.setTimeout(120_000);


    await page.goto('https://www.youtube.com/');

    const searchBox = page.locator('input[name="search_query"]');
    await searchBox.fill('# Dhun Song | Saiyaara |');
    await page.locator('button.ytSearchboxComponentSearchButton').click();

    const songResult = page
        .locator('ytd-video-renderer')
        .filter({ hasText: 'Dhun Song | Saiyaara' })
        .first()
        .locator('a#video-title');
    await songResult.click();

    const playButton = page.locator('button.ytp-play-button[aria-label^="Play"]');
    await playButton.waitFor();
    await playButton.click();
    await page.waitForTimeout(50_000);
    await page.locator('button.ytp-play-button[aria-label^="Pause"]').click();
});

