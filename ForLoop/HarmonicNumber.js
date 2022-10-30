let readline = require("readline-sync");
let N = readline.question("Enter the  number: ");
function nthHarmonic(N)
{    
    let harmonic = 1;     
    for (let i = 2; i <= N; i++)
    {
        harmonic += parseFloat(1) / i;
    }
    return harmonic;
} 
console.log( nthHarmonic(N).toFixed(4));