import { Locator, Page } from "@playwright/test";



export class CreditCardApplicationPage
{

  private fullName:Locator
  private email:Locator
  private number:Locator
  private address:Locator
  private EmpType:Locator
private income:Locator
private cardType:Locator
private applybutton:Locator
    constructor(page:Page)
    {

    this.fullName=page.locator("#name")
    this.email=page.locator("#email")
    this.number=page.locator("#phone")
    this.address=page.locator("#address")
    this.EmpType=page.locator("#employment")
    this.income=page.getByRole('spinbutton', { name: 'Monthly Income (₹) *' })
   this.cardType=page.locator("#cardType")
    this.applybutton=page.getByText("Apply Now")
    }
    
  async applyCreditCardForm()
  {
    await this.fullName.fill("paven")
     await this.email.fill("Paven@gmail.com")

  }



}