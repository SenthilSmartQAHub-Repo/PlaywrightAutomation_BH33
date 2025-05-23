import test from "@playwright/test";

test("Alert popup",async({page})=>{


   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

     



   await page.locator("#resume").setInputFiles("download/testcases.xlsx")


  

   await page.waitForTimeout(50000)


})


