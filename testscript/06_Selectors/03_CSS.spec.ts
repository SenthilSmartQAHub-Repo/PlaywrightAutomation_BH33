import test from "@playwright/test";

test("CSS",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/login-page.html")
  
    //     tagname[pn='pv']  => input[id='username']

 // await page.locator("css=input[id='username']").fill("admin")

    await page.locator("#username").fill("admin")
})
test("class attribute",async({page})=>{

  await page.goto("https://www.myntra.com/login")
  
  //class="desktop-input"
  await page.locator(".desktop-input").fill("book")
   
})
