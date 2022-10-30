var readlineSync = require("readline-sync");
var num = readlineSync.question("Enter number:");
var Pow=1;
for(var i=1;i<=num;i++)
{
    Pow=Pow*2;
}
console.log(" power of 2's: "+num+" is "+Pow);