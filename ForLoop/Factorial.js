let readline=require("readline-sync");
let n=readline.question("enter the number: ");
function Factorial(n){
    if(n==1)
    return 1;
    else
    return n*Factorial(n-1);
}
console.log(Factorial(n));