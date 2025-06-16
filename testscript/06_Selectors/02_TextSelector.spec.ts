import test from "@playwright/test";



test("title",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/04/elements.html")
  
  //Finding the viewport of your browser
  await page.locator("text=Finding the viewport of your browser").click()

})
