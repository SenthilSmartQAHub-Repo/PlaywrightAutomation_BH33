

import test from "@playwright/test";

test("getByRole ex1",async({page})=>{

   await page.goto("https://www.google.com")

   //role="combobox"
    await page.getByRole("combobox").fill("Playwright automation testing")
    await page.waitForTimeout(5000)

})

//name="email" attribute

test("getByRole ex2",async({page})=>{

    await page.goto("https://www.facebook.com")
 
     await page.getByRole('textbox',{name:'email'}).fill("Playwright automation testing")
     await page.waitForTimeout(5000)
 
 })

 test("getByRole ex3",async({page})=>{

    await page.goto("https://www.google.com")
 
     await page.getByRole('link',{name:'gmail'}).click()
     await page.waitForTimeout(5000)
 
 })
 