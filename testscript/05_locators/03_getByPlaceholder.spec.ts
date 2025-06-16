import test from "@playwright/test";


test("getByPlaceholder ex1",async({page})=>{

  await page.goto("https://www.amazon.in")

  //placeholder="Search Amazon"
  await page.getByPlaceholder("Search Amazon").fill("Mobile")

   await page.waitForTimeout(5000)

})