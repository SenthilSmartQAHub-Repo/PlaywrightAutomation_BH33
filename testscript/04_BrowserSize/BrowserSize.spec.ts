import test from "@playwright/test";

test.use(
    {
viewport:{width:1536,height:730}

    }
)

test("title",async({page})=>{

  await page.goto("http://www.google.com")

  console.log(page.viewportSize().width)
  console.log(page.viewportSize().height)

  await page.waitForTimeout(5000)

  await page.setViewportSize({width:1536,height:730})
  await page.waitForTimeout(5000)
})


test("title1",async({page})=>{

    await page.goto("http://www.google.com")
   // await page.setViewportSize({width:1536,height:730})
  
  })
  