import test, { expect } from "@playwright/test";

test("title",async({page})=>{
  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/bus-booking-portal.html")

  
  await expect(page).toHaveTitle("Bus Booking Portal")
  
//   const pagetTitle=await page.title()
//   expect(pagetTitle).toBe("Bus Booking Portal")

})

test("checkbox",async({page})=>{
  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/table-with-checkboxes.html")
  const studentoneelement= page.locator("//td[text()='1']/preceding-sibling::td/input")
 
 await studentoneelement.uncheck()

  await expect(studentoneelement).not.toBeChecked() 
 
//    await expect(studentoneelement).toBeChecked() //Hard Assertion
//    await expect.soft(studentoneelement).toBeChecked() //Soft Assertion

   console.log("end of the script")
  
// const boolvalue = await studentoneelement.isChecked()
//   expect(boolvalue).toBeTruthy()

})

