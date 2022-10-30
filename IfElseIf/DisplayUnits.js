let power= Math.floor((Math.random()*10)%7);
let number=10**power;
console.log("Number : " +number);

if(number==1)
{
    console.log("One");
}
else if(number==10)
{
    console.log("Ten");
}
else if(number==100)
{
    console.log("Hundred");
}
else if(number==1000)
{
    console.log("Thousand");
}
else if(number==10000)
{
    console.log("Ten Thousand");
}
else if(number==100000)
{
    console.log("One Lakh");
}
else if(number==1000000)
{
    console.log("Ten Lakh");
}
else{
    console.log("Input value not defined")
}