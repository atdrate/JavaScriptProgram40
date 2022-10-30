let DayNumber= Math.floor(Math.random()*7)+1;
console.log("Number : " +DayNumber);
if(DayNumber==1)
{
    console.log("Sunday");
}
else if(DayNumber==2)
{
    console.log("Monday");
}
else if(DayNumber==3)
{
    console.log("Tuesday");
}
else if(DayNumber==4)
{
    console.log("Wednesday");
}
else if(DayNumber==5)
{
    console.log("Thursday");
}
else if(DayNumber==6)
{
    console.log("Friday");
}
else if(DayNumber==7)
{
    console.log("Saturday");
}
else{
    console.log("DayNumber not valid");
}