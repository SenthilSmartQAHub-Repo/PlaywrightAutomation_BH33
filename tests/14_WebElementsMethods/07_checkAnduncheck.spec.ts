import test from "@playwright/test";


test("check and uncheck Checkbox",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/table-with-checkboxes.html")


   await page.locator("//td[text()='1']/preceding-sibling::td/input").uncheck();

  await page.waitForTimeout(5000)

   await page.locator("//td[text()='1']/preceding-sibling::td/input").check()

})


test("check radiobutton",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")


   await page.locator("#male").check();
  

})





