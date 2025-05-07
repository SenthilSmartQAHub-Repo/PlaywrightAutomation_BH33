import test, { chromium, firefox, webkit } from "@playwright/test";

test("chrome browser",async ()=>{

    const browser=await chromium.launch() //{channel:'chrome'} optional
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://www.google.com")
     await page.waitForTimeout(5000)
})

test("edge browser",async ()=>{

    const browser=await chromium.launch({channel:'msedge'})
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://www.google.com")
    await page.waitForTimeout(5000)
})


test("firefox browser",async ()=>{

    const browser=await firefox.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://www.google.com")
     await page.waitForTimeout(5000)

})
test("Webkit browser",async ()=>{

    const browser=await webkit.launch()
    const context=await browser.newContext()
    const page=await context.newPage()
    await page.goto("http://www.google.com")
     await page.waitForTimeout(5000)

})

//installed browser  chromium.launchPersistentContext