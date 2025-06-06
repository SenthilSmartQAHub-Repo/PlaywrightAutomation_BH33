
import test from "@playwright/test";


test("Google.com",async({page})=>{

  await page.goto("https://www.google.com")

})
test.only("playwrightautomationtesting",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

})
test("facebook",async({page})=>{

  await page.goto("https://www.facebook.com")

})

