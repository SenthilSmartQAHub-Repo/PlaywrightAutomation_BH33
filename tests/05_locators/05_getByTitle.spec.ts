import test from "@playwright/test";

test("getByTitle ex1",async({page})=>{

   await page.goto("https://www.mail.com/")

   //title="Enter searchterm here"

   await page.getByTitle("Enter searchterm here").fill("mail")
   await page.waitForTimeout(5000)

})