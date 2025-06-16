import test from "@playwright/test";



test("Timeout",async({page})=>{

  await page.setDefaultTimeout(10000)

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")


  //await page.waitForSelector("//*[text()='Submit']")

  await page.waitForLoadState("networkidle")

  const submityElement=page.getByText("Submit").first()

  await submityElement.scrollIntoViewIfNeeded()
  
await submityElement.dispatchEvent("click")

})
