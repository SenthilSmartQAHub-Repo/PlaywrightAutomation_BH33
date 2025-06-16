import test from "@playwright/test";

test("click operation",async({page})=>{

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/04/imageclick.html")

  //await page.getByTitle("Playwright Course").nth(1).click()

  //forcing click
   //await page.getByTitle("Playwright Course").nth(1).click({force:true})

   //programmatic click
   await page.getByTitle("Playwright Course").nth(1).dispatchEvent("click")
    
})