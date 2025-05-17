import test from "@playwright/test"

test("Finding the No of option present in the listbox",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

  
   const multi_selectlistbox= page.locator("#location")

   await multi_selectlistbox.selectOption([{index:0},{label:'Chicago'}])

   await page.waitForTimeout(5000)

    await multi_selectlistbox.selectOption([]) // de-select the listbox options
})
