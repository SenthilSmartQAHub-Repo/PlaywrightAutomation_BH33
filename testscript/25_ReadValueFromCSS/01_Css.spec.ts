import test from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'

//npm install csv-parse --save-dev

//Reading the csv data

const csvdata=parse(fs.readFileSync('testdata/data.csv'),{columns:true,skip_empty_lines:true,skip_records_with_empty_values:true})


test("Reading values from Css",async({page})=>{

    await page.goto("https://playwrightautomationtesting.blogspot.com/2025/01/blog-post.html")

  await page.getByPlaceholder("Enter your full name").fill(csvdata[0].fullname)


})
