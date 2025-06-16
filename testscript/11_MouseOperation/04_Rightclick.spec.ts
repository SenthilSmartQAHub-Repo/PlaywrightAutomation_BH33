import test from "@playwright/test";

test("Right click operation",async({page})=>{

   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/04/elements.html")

   await page.getByTitle("You can find the Viewport size of you browser").click({button:'right'})

   await page.waitForTimeout(1000)

});