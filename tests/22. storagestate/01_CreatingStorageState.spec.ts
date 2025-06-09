
import test from "@playwright/test";


test("Creating storage state",async({page})=>{

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

 await page.getByPlaceholder("Username").fill("Admin")
  
 await page.getByPlaceholder("Password").fill("admin123")

 await page.locator("//*[normalize-space()='Login']").nth(1).click()

 await page.context().storageState({path:'creds/loginDetails.json'})


})


