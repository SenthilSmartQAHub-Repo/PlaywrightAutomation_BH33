import test from "@playwright/test";


test("CSS Color",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/04/elements.html")

 const viewPortElement= await page.getByText("ViewPort").first();

    const color=await viewPortElement.evaluate((e)=>{

           return window.getComputedStyle(e).getPropertyValue('color')

         })
   console.log(color)

})
