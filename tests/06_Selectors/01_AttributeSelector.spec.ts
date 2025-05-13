import test from "@playwright/test";



test("title",async({page})=>{

  await page.goto("https://www.facebook.com/")
  
  await page.locator("[name=email]").fill("playwright@gmail.com")

})
