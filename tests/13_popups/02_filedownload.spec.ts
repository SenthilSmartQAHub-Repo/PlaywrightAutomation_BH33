import test from "@playwright/test";

test("Alert popup",async({page})=>{

await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/const-chromium-requireplaywright-async.html")

const a1=page.waitForEvent('download');


await page.getByText("Download Excel Document",{exact:true}).first().click()

const a2=await a1;

await a2.saveAs(`download/${a2.suggestedFilename()}`)


})