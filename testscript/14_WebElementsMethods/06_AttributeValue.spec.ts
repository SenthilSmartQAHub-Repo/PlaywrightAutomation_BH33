import test, { expect } from "@playwright/test";

test("title",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/04/elements.html")


  const PV=await page.getByText("Finding the viewport of your browser").getAttribute("title")


  expect(PV).toBe("You can find the Viewport size of you browser")
})
