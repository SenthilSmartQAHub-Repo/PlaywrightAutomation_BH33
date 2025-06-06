
import test from "@playwright/test";


test.beforeAll("before all",async({})=>{

  console.log("open browser")

})
test.afterAll("after all",async({})=>{

  console.log("close browser")

})
test.afterEach("afterEach",async({page})=>{

  console.log("logout")

})
test.beforeEach("beforeEach",async({page})=>{

  console.log("Login")

})
test("test1",async({page})=>{

    console.log("operation1")

})
test("test2",async({page})=>{

 console.log("operation2")

})

