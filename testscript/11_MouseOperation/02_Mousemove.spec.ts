import test from "@playwright/test";


//senthilkumartest01@test.com
test("Mouse move operation",async({page})=>{



      await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/menu-items.html")
   
      await page.getByText("Courses").hover()

      await page.waitForTimeout(5000)

      await page.getByText("JavaScript",{exact:true}).click()

      await page.waitForTimeout(50000)

})
