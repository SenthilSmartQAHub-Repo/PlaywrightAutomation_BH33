
import test from "@playwright/test";


test("title",async({page})=>{

  await page.goto("http://www.google.com")

  await page.getByText("Gmail").click();

  await page.waitForTimeout(5000)

})
