

// 0 1 1 2 3 5 8


var n=10

var a=0
var b=1

console.log(a)
console.log(b)

for(let i=3;i<=n;i++)
{
    let nextnumber=a+b
    console.log(nextnumber)
   a=b;
   b=nextnumber;

}