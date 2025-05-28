import test from "@playwright/test";

test("Fill operation1",async({page})=>{


    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/login-page.html")
    
    //await page.getByPlaceholder('Enter your username').fill("demo")
      
    // const usernametextbox=page.getByPlaceholder('Enter your username')
    //  await usernametextbox.fill("Demo")

    await page.fill('#username','demo')
    await page.click("//button[@data-testid='loginButton']")
})


test("Fill operation2",async({page})=>{


    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/city-and-area-code-body-font-family.html")
    
  await page.getByPlaceholder("Enter city").fill("Kolkata")

})

test("Mulitple line textbox ",async({page})=>{


    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")
    
 //        \n  ->  next line
    await page.locator("#address").fill("chennai\ntamilnadu\nindia")


})

