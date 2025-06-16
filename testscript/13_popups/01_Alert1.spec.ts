

import test from "@playwright/test";

test("Alert popup",async({page})=>{

   await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/alert.html")

   
    page.on('dialog', async(dialogobject)=>
    {
      console.log("message is ", dialogobject.message())

       console.log("type of the popup", dialogobject.type())

       if(dialogobject.type()=='confirm' || 'alert')
       {
       dialogobject.accept()
       }
       else if(dialogobject.type()=='prompt')
       {
         console.log("message is ", dialogobject.defaultValue())
         dialogobject.accept("Playwright")
       }
     
    })


   await page.getByText("Delete").nth(1).click()



})
