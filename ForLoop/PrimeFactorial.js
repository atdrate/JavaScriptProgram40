var readline=require("readline-sync");
var number=readline.question("Enter the number: ");
function primeFactors(number){
    var factors=[];
    divisor=2;
    while(number>2){
        if(number%divisor==0){
            factors.push(divisor);
            number/=divisor;
            divisor++;
        }
        else{
            divisor++;
        }
    }
    return factors;
}
console.log(primeFactors(number));