


let str1="madam"  //emoclew

let reverse=''

for(let i=str1.length-1;i>=0;i--)
{
reverse = reverse+ str1.charAt(i)
}

console.log(reverse)

if(str1==reverse)
{
    console.log("Palindrome")
}
else{
    console.log("not palindrome")
}