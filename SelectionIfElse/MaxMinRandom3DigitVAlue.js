let num1=Math.floor((Math.random()*900)+100);
let num2=Math.floor((Math.random()*900)+100);
let num3=Math.floor((Math.random()*900)+100);
let num4=Math.floor((Math.random()*900)+100);
let num5=Math.floor((Math.random()*900)+100);

console.log("Generated numbers : " +num1, num2, num3, num4, num5);

//Max Number
if(num1>num2 && num1>num3 && num1>num4 && num1>num5)
{
    console.log(num1+ " : 1st number is maximum");
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5)
{
    console.log(num2+ " : 2nd number is maximum");
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5)
{
    console.log(num3+ " : 3rd number is maximum ");
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5)
{
    console.log(num4+ " : 4th number is maximum");
}
else if(num5>num1 && num5>num2 && num5>num3 && num5>num4)
{
    console.log(num5+ " : 5th number is maximum");
}
else{
    console.log("Some numbers are equal")
}

// mini number
if(num1<num2 && num1<num3 && num1<num4 && num1<num5)
{
    console.log(num1+ " : 1st number is minimum ")
}
else if(num2<num1 && num2<num3 && num2<num4 && num2<num5)
{
    console.log(num2+ " : 2nd number is minimum ")
}
else if(num3<num1 && num3<num2 && num3<num4 && num3<num5)
{
    console.log(num3+ " : 3rd number is minimum ")
}
else if(num4<num1 && num4<num2 && num4<num3 && num4<num5)
{
    console.log(num4+ " : 4th number is minimum ")
}
else if(num5<num1 && num5<num2 && num5<num3 && num5<num4)
{
    console.log(num5+ " : 5th number is minimum ")
}
else{
    console.log("Some numbers are equal")
}