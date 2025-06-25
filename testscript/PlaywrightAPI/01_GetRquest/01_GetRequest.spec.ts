import test, { expect } from "@playwright/test";


test("get request",async({request})=>{

const response=await request.get("https://api.github.com/orgs/SenthilPlaywrightAutomation/repos",
{
 headers:
 {
    'Accept':'application/vnd.github+json'
 }
}
)
expect(response.status()).toBe(200)
expect(response.ok()).toBeTruthy()
console.log(await response.json())

})
