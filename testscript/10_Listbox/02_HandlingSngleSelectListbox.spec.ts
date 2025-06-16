import test from "@playwright/test";





test("title",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/india-state-and-district-selector-body.html")


 // await page.locator("#state").selectOption({index:1}) 

  //  await page.locator("#state").selectOption({value:'Karnataka'}) 

  const statelistbox=page.locator("#state")
   
  await statelistbox.selectOption({label:'Kerala'}) 




})
