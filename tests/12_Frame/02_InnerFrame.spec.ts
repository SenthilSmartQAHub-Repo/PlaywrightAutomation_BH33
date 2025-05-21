

import test from "@playwright/test";

test("Double click operation",async({page})=>{

   await page.goto("https://www.dezlearn.com/nested-iframes-example/")


   const outerframe=page.frame({name:'demo_parent_iframe'})

  // const innerframe=outerframe.childFrames()[0]

   const innerframe= outerframe.frameLocator('#iframe1')

   await innerframe.getByText("Click").first().click()

   await outerframe.getByText("Click").first().click()


})