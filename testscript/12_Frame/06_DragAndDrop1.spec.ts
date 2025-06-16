import test from "@playwright/test";

test("Double click operation",async({page})=>{

   await page.goto("https://beej.us/blog/data/drag-n-drop/")


     // const frame=await page.frames()[1] //switch to frame

     // console.log(allframe.length)

    
     const frame=await page.frame({url:'https://beej.us/blog/data/drag-n-drop/widget/'}) // name, url


   await frame.dragAndDrop("#goat0","#goat2")


});
