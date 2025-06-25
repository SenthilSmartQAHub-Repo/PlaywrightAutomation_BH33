


var automation1='selenium'
var automation2='playwright'

automation1=automation1.concat(automation2) // seleniumplaywright

 automation2=automation1.substring(0,automation1.length-automation2.length)
 automation1=automation1.substring(automation2.length)

 console.log(automation2) //selenium
 
 console.log(automation1);//playwright
 