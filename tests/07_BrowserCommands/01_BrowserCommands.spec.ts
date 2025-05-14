import test from "@playwright/test";



test("title",async({page})=>{

  await page.goto("http://www.google.com")

    console.log(await page.title())
    console.log(page.url())
    await page.close()
})
