let year= Math.floor((Math.random()*9000)+1000);
console.log("Enter the Year : " +year);
leapCheck1 =year %400;
leapCheck2 =year %100;
leapCheck3 =year %4;
if(leapCheck1==0 || leapCheck2 !=0 && leapCheck3==0)
{
    console.log("This is leap year");
}
else{
    console.log("This is not leap year");
}