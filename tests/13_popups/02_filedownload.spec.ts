
import test from "@playwright/test";

test("Alert popup",async({page})=>{

   await page.goto("https://www.pdf995.com/download.html")

   const a1=page.waitForEvent('download');


   await page.getByText("Download",{exact:true}).first().click()

   const a2=await a1;

   await a2.saveAs(`./download/${a2.suggestedFilename()}`)


})