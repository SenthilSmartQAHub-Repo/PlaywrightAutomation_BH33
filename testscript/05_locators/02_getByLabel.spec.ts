
import test from "@playwright/test";


test("getByLabel ex1",async({page})=>{

  await page.goto("http://www.facebook.com")

//aria-label="Email address or phone number" -- attribute

await page.getByLabel("Email address or phone number").fill("demo@gmail.com")

await page.waitForTimeout(5000)

})
test("getByLabel ex2",async({page})=>{

    await page.goto("https://www.wikipedia.org/")
  
   //  <label> Search Wikipedia</label>  - text content

  await page.getByLabel("Search Wikipedia").fill("Automation") // input
  
  await page.waitForTimeout(5000)
  
  })
  

