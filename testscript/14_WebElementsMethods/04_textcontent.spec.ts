import test from "@playwright/test";

test("textContent",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/todaydate.html")

  const value=await page.locator('#dateBox').textContent()

  console.log(value)

})
test("innerText",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/todaydate.html")

  const value=await page.locator('#dateContainer').innerText()

  console.log(value)

})

test("innerHTML",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/05/todaydate.html")

  const value=await page.locator('#dateContainer').innerHTML()

  console.log(value)

})

test("innerHTML1",async({page})=>{

const date = new Date();

const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const formattedDate = date.toLocaleDateString('en-GB', options);

console.log(formattedDate); // e.g., "Saturday, 31 May 2025"



})


