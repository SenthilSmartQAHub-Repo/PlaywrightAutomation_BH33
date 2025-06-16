import test from "@playwright/test";

test("Authentication popup1",async({page})=>{

                   //https://un:pwd@url
   await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth")


   await page.waitForTimeout(5000)
    
  

})

test("Authentication popup2",async({page})=>{

//un:pwd

   const username="admin"
   const password="admin"
   const logindetails="basic "+btoa(username+':'+password)

   console.log("basic "+btoa(username+':'+password))
   
   await page.context().setExtraHTTPHeaders({Authorization: logindetails})

   await page.goto("https://the-internet.herokuapp.com/basic_auth")

   await page.waitForTimeout(5000)
     


})