import test, { expect } from "@playwright/test";

test("Query parameter",async({request})=>{


const token="ghp_zi0Ev2tk8bW"



const ORG='SenthilPlaywrightAutomation'


const response=await request.post(` https://api.github.com/orgs/${ORG}/repos`,
{
 headers:
 {
    'Accept':'application/vnd.github+json',
    'Authorization':`Bearer ${token}`
 },
data:
{
    name:'automation',
    private: true
}
}
)


expect(response.status()).toBe(201)

const repos=await response.json()

console.log("Create repo", repos.name)


})