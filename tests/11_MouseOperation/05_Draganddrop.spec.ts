import test from "@playwright/test";

test("Drag and drop operation",async({page})=>{

   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/drag-and-drop-operation.html")
  
   const sourceelement=page.locator("#dragImage")

   const targetelement=page.locator("#target>img")

   await sourceelement.dragTo(targetelement) // drag and drop operat


   await page.waitForTimeout(1000)

});