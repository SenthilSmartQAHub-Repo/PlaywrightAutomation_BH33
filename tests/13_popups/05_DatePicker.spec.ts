import test from "@playwright/test";

test("Date picker",async({page})=>{

    await page.goto("https://www.easemytrip.com/?utm_campaign=740105751&utm_source=google&utm_medium=cpc&utm_term=p_flight%20booking%20website&adgroupid=129016364612&device=c&gad_source=1&gad_campaignid=740105751&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgOS9dGrsNfXWPFL29oqj7ZgspD6r1d7FBP-JaeoeZWQqlm7hJeN5Xn4aAgPlEALw_wcB")

    await page.locator("#ddate").click()

     await page.waitForTimeout(5000)
    
    await page.locator("#dvcalendar .active-date").nth(1).click()

     await page.waitForTimeout(5000)
})