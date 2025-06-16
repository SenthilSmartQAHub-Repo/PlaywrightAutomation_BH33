import test from "@playwright/test";

test("pressSequentially",async({page})=>{


    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/login-page.html")
    
    await page.getByPlaceholder('Enter your username').pressSequentially("demosdfdsfhajdksfhsdajkfhdjs",{delay:2000})
      

}) 
