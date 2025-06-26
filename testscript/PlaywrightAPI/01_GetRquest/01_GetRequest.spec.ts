import test, { expect } from "@playwright/test";


test("get request",async({request})=>{


const token="ghp_zi0Ev5oIB2tk8bW"

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




test("Path parameter",async({request})=>{


const token="ghp_zi0Ev5o9BT1cttk8bW"

// https://api.github.com/repos/OWNER/REPO

const OWNER='SenthilPlaywrightAutomation'
const REPO='NewRepoUnderOrg'

const response=await request.get(`https://api.github.com/repos/${OWNER}/${REPO}`,
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
const data=await response.json()



console.log(data.owner.login)
console.log(data.name)

})




test("Query parameter",async({request})=>{


const token="ghp_zi0Ev5oCXYhIB2tk8bW"

// https://api.github.com/repos/OWNER/REPO

const ORG='SenthilPlaywrightAutomation'


const response=await request.get(`https://api.github.com/orgs/${ORG}/repos`,
{
 headers:
 {
    'Accept':'application/vnd.github+json',
    'Authorization':`Bearer ${token}`
 },
 params:
 {
    sort:'created'
 }
}
)
expect(response.status()).toBe(200)
expect(response.ok()).toBeTruthy()
const data=await response.json()
console.log(data)

console.log('Repos', data.map(r=>r.name))

})