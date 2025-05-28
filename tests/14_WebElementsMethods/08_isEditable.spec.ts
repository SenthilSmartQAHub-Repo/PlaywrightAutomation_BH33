import test, { expect } from "@playwright/test";


test("isEditable",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/name-address-form.html")


  const value=await page.locator(".disabled").isEditable();

  expect(value).toBeFalsy()

})
