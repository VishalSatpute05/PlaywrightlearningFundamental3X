import{test, expect} from '@playwright/test'

test('verify youtube page is loaded',async({page})=>
    {

  await page.goto('https://www.youtube.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('KK song jukebox');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Evergreen Hits of KK (Audio', description: 'Evergreen Hits of KK (Audio Jukebox) | Remembering the Golden Voice | T Series - Bhushan Kumar' }).click();
  await page.getByRole('button', { name: 'Skip', exact: true }).click();
 // await page.getByRole('button', { name: 'Pause keyboard shortcut k' }).click();


})