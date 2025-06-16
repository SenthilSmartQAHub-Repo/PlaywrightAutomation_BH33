import test from "@playwright/test";


test("perform operation on the child window",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/open-course-video-body-font-family.html")


   const windowpopup= page.waitForEvent('popup')

  await page.getByText("Open Playwright Course").click()

  const Newwindowpage=await windowpopup;

  console.log(await Newwindowpage.title())


 await Newwindowpage.getByRole('link', { name: 'Playwright#1 Playwright' }).click()



  Newwindowpage.close();


})

test("finding no of windows and handling mulitple windows",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/open-course-video-body-font-family.html")

  await page.getByText("Open Course Videos").first().click()

  await page.waitForTimeout(10000)

 const allpages= page.context().pages()

 console.log(allpages.length)

 console.log(await allpages[1].title())

 for(const page1 of allpages)
 {
    if(await page1.title()=="SenthilSmartQAHub - YouTube")
    {
        await page1.close()
    }

 }


await page.context().close() //all the browsers


})






