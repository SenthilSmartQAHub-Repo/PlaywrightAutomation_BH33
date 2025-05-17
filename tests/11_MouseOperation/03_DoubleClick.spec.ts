import test from "@playwright/test";

test("Double click operation",async({page})=>{

   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/double-click.html")

   await page.getByText("Open Course Videos").dblclick();

   await page.waitForTimeout(1000)

});
