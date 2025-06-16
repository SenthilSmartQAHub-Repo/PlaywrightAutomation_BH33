
import test from "@playwright/test";

test.use({
viewport:{width:1536,height:730}
})

test("Google.com",async({page})=>{

  await page.goto("https://www.google.com")

})
test.fail("playwrightautomationtesting",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

})
test("facebook",async({page})=>{

  await page.goto("https://www.facebook.com")

})

