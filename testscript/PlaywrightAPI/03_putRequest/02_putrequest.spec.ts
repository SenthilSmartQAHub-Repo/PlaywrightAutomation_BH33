import test, { expect } from "@playwright/test";

test("Query parameter",async({request})=>{


const token="ghp_zi0Ev5oIB2tk8bW"



const OWNER='SenthilPlaywrightAutomation'

//https://api.github.com/repos/OWNER/REPO

const response=await request.put(`https://api.github.com/repos/OWNER/REPO`,
{
 headers:
 {
    'Accept':'application/vnd.github+json',
    'Authorization':`Bearer ${token}`
 },
data:
{
    name:'automation35tet343',
    private: false
}
}
)

expect(response.status()).toBe(201)

const repos=await response.json()

console.log("Create repo", repos.name)


})