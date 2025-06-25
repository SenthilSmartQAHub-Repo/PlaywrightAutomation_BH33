import test, { expect } from "@playwright/test";


test("get request",async({request})=>{


const token="ghp_zi8bW"

const response=await request.get("https://api.github.com/orgs/SenthilPlaywrightAutomation/repos",
{
 headers:
 {
    'Accept':'application/vnd.github+json',
    'Authorization':`Bearer ${token}`
 }
}
)
expect(response.status()).toBe(200)
expect(response.ok()).toBeTruthy()
const repos=await response.json()

repos.forEach(res => {
   console.log(res.name,res.private)
});

})
