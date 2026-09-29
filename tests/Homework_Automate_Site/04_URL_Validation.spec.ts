import{test, expect} from '@playwright/test'

test('verify url is valid and change after invalid username and password', async({page})=>{

   await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    
   await page.locator("//input[@id='email']").fill("xyz@gmail.com");
   await page.locator("//input[@id='password']").fill("123456789@0");

   await page.locator("//input[@type='checkbox']").check();//remember me checkbox click
   await page.locator("//button[@class='login-btn']").click();//login button click

await expect(page).toHaveURL(
  "https://app.thetestingacademy.com/playwright/multiple_element_filter?email=xyz%40gmail.com&password=123456789%400&remember=yes#login-success"
);
});