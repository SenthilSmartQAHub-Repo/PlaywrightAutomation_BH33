import test, { Browser, BrowserContext, BrowserType, chromium, Page } from "@playwright/test";



test("title",async() =>{

       const browser=await chromium.launch({channel:'msedge'})
        const context=await browser.newContext()
        const page=await context.newPage()

        
 // console.log(await page.context().browser().browserType().executablePath())

})
