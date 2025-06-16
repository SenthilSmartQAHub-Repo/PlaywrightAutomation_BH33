




import test from "@playwright/test";





test("title",async({page})=>{

  await page.goto("https://www.facebook.com/r.php?entry_point=loginl")

    const currentoption=await page.locator("#day option:checked").textContent()


    console.log(currentoption)

})
