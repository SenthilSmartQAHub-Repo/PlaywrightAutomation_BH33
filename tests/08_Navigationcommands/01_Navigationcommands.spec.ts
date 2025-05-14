import test from "@playwright/test";



test("title",async({page})=>{

   await page.goto("http://www.google.com")

   await page.getByText("Gmail").click()

   await page.goBack() //navigate to the previous page

   await page.goForward() // navigate to the next page

   await page.waitForTimeout(2000) // wait for 2 secs

   await page.reload() // refresh

})
