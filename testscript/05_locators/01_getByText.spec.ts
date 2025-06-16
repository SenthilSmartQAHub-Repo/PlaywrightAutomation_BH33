
import test from "@playwright/test";


test("getByText ex1",async({page})=>{

  await page.goto("http://www.google.com")

  //await page.getByText("Gmail").click(); //Complete content
  await page.getByText("Gma").click(); // Partial content

  await page.waitForTimeout(5000)

})

test("getByText ex2",async({page})=>{

  await page.goto("https://playwright.dev/")
  
   await page.getByText("API",{exact:true}).click()

  await page.waitForTimeout(5000)

})


test("getByText ex3",async({page})=>{

  await page.goto("https://www.myntra.com/")
  
   await page.getByText("Men",{exact:true}).nth(0).click()

  await page.waitForTimeout(5000)

})


