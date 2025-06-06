
import test from "@playwright/test";


test("scrollIntoViewIfNeeded",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")


  const expectedSalaryElement=await page.getByPlaceholder("Enter expected salary")
  
  await expectedSalaryElement.scrollIntoViewIfNeeded()
  
  await expectedSalaryElement.fill("2332323")

})


test("scrollIntoViewIfNeeded2",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")


  const submityElement=page.getByText("Submit").first()

  await submityElement.scrollIntoViewIfNeeded()
  
await submityElement.dispatchEvent("click")

})


