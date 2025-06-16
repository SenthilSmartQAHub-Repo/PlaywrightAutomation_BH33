import test from "@playwright/test";





test("Finding the No of option present in the listbox",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/india-state-and-district-selector-body.html")

  
 const alloptions= await page.locator("#state option").all()

  console.log(alloptions.length)


    const noofoption=await page.locator("#state option").count()

     console.log(noofoption)


})
