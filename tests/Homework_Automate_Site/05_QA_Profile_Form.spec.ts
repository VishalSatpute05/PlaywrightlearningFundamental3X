import{test,expect} from '@playwright/test';

test('Verify the QA Profile Form', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice#page");

    await page.getByLabel("First Name").fill("John");
    await page.getByLabel("Last Name").fill("Deck");
    await page.locator('input[name="gender"][value="Male"]').first().click();
    await page.locator('#years-experience').click();
    await page.selectOption('#years-experience', '5');
    await page.getByRole('textbox', { name: "Date" }).fill("2026-09-29");
    await page.locator('input[name="profession"][value="Automation Tester"]').first().click();
    await page.getByRole('checkbox', { name: "Selenium Webdriver" }).check();
    await page.getByRole('checkbox', { name: "Asia" }).click();
    await page.getByRole('button',{name:"Save profile"}).click();
    await page.waitForTimeout(3000);
});