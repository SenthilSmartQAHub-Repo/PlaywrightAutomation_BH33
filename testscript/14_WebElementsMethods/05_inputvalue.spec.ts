import test, { expect } from "@playwright/test";

test("title",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/city-and-area-code-body-font-family.html")


  const textboxvalue=await page.locator("#city").inputValue()


   expect(textboxvalue).toBe("Chennai")

  console.log(textboxvalue)

})
