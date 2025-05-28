import test, { expect } from "@playwright/test";



test("isDisabled_isEnabled",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/mobile-recharge.html")


 const value1=await page.getByText("Confirm").isDisabled()

 expect(value1).toBeTruthy()

  const value2=await page.getByText("Confirm").isEnabled()

 expect(value2).toBeFalsy()

})
