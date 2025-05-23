import test from "@playwright/test";

test("Alert popup",async({page})=>{


   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

     
    const fileupload=page.waitForEvent('filechooser')


   await page.locator("#resume").click()


     const fupload=await fileupload;


    fupload.setFiles('download/testcases.xlsx')


   await page.waitForTimeout(50000)


})


