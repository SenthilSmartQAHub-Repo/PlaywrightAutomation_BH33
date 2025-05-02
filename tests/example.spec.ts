import test from "@playwright/test";

//page - Isolated page instance, Created for each test 

test("title",async({page})=>{

  await page.goto("http://www.google.com")

})
