import test from "@playwright/test";



test("clear operation",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/city-and-area-code-body-font-family.html")

  //await page.locator('[name=city]').fill("")

  await page.locator('[name=city]').clear()
})
