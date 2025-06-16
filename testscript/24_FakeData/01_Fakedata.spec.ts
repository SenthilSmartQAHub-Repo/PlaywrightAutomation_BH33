import test from "@playwright/test";
import {faker, fakerEN_CA, fakerEN_IN} from "@faker-js/faker"
//installation command
//======================
//npm install @faker-js/faker --save-dev 

test("Fake Data generation",async({page})=>{


    //name
        console.log(faker.person.fullName())
        console.log(faker.person.firstName())
        console.log(faker.person.lastName())

    //address
     console.log(faker.location.streetAddress())
     console.log(faker.location.city())
    console.log(faker.location.county())
    console.log(fakerEN_CA.location.state())
    console.log(fakerEN_IN.location.state())
    console.log(fakerEN_IN.phone.number())

   //internet data
      console.log(faker.internet.email())
          console.log(faker.internet.url())

    //company name
        console.log(faker.company.name())
        

})
