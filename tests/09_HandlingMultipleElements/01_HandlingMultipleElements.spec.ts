import test from "@playwright/test";

test("title",async({page})=>{

   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/table-with-checkboxes.html")

   const checkboxes=await page.locator("css=input[type='checkbox']").all()


   console.log(checkboxes.length)
  // checkboxes[0].check()
  // await checkboxes[1].check()
//    checboxes[2].check()

// for of loop
   for(const checkbox1 of checkboxes)
   {
   await checkbox1.check()//check() - click on checkbox or radio button
   }

   await page.waitForTimeout(5000)
})
