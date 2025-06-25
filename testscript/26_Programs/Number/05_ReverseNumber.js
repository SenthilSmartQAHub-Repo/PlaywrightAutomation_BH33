


var n=123;

var ncopy=n

let reverse=0

while(n!=0)
{
  
let temp=n%10   // temp=3  |  temp=2
reverse=reverse*10   // reverse=0 | 30
reverse=reverse+temp   // reverse=3 | 32
n=Math.floor(n/10)   //n=12

}




console.log(reverse)

//Palindrome
if(ncopy==reverse)
{
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}