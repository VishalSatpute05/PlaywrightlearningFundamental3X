import{chromium, BrowserContext, Page} from "playwright";

async function run()
{
    let browser=await chromium.launch({headless:false});
    let context:BrowserContext=await browser.newContext();
    let page = await context.newPage();

    await page.goto("https://example.com");
    console.log("Page title is: "+await page.title());

    await page.close();
    await context.close();
    await browser.close();
}
run();

// Browser launched
// Context created
// Page opened
// Title: Example Domain