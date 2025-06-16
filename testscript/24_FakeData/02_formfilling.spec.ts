import { faker } from "@faker-js/faker";
import test from "@playwright/test";


test("form filling",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

  await page.getByPlaceholder("Enter your full name").fill(faker.person.fullName())



})
