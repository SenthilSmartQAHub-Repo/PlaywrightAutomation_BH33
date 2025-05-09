

import test from "@playwright/test";

test("getByTestId ex1",async({page})=>{

   await page.goto("https://www.skyscanner.co.in/")

  //data-testid="LogInText"
 
   await page.getByTestId("LogInText").click()

   await page.waitForTimeout(5000)

})