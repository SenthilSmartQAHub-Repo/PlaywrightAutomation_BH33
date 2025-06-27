import test from "@playwright/test";
import { CreditCardApplicationPage } from "../../pages/CreditCardApplicationPage";


test("getByLabel ex1",async({page})=>{

  await page.goto("https://playwrightautomationtesting.blogspot.com/2025/06/credit-card-application-form.html")


   const creditcardformoobj=new CreditCardApplicationPage(page);

    await creditcardformoobj.applyCreditCardForm()

    await page.waitForTimeout(5000)

})