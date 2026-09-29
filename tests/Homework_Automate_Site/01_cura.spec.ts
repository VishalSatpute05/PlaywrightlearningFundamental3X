import{test, expect} from '@playwright/test'

test('verify cura page is loaded',async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let makeAppointmentButton = await page.getByText("Make Appointment").click();
    let userName = await page.locator("#txt-username").fill("John Doe");
    let password=await page.locator("#txt-password").fill("ThisIsNotAPassword");
    let loginButton = await page.locator("#btn-login").click();
    
    //wait applied for  Make Appointment appears
    //await page.waitForTimeout(5000);

    // await makeAppointmentButton.click();
    // await userName.fill("John Doe");
    // await password.fill("ThisIsNotAPassword");
    // await loginButton.click();
    
    let verify_message=page.locator('h2');
        await expect(verify_message).toContainText("Make Appointment");

});