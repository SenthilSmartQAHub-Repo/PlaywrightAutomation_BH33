


import test from "@playwright/test";



test("title",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/india-state-and-district-selector-body.html")

  const allNameoftheoptions=await page.locator("#state option").allInnerTexts()
   

    for(const value of allNameoftheoptions)
    {
        console.log(value)
    }

})