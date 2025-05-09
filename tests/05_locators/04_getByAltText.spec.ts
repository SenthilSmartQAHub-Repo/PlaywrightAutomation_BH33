import test from "@playwright/test";

test("getByAltText ex1",async({page})=>{

  await page.goto("https://www.flipkart.com/")

 //alt="Cart"
 await page.getByAltText("Cart").click()

   await page.waitForTimeout(5000)

})