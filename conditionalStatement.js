//number is greater than or equals to 30
var a=40;
if(a===30){
    console.log("The number is equal to 30");
}
else if(a<30){
    console.log("The number is less than 30");
}
else{
    console.log("The number is greater than 30");
}

//number is odd or even
if(a%2!==0){
    console.log("The number is odd.")
}
else {
    console.log("The number is even.")
}

//percentage
math=39;
science=68;
biology=56;
nepali=78;
english=78;
marks=((math+science+biology+nepali+english)/500)*100;
if(marks<50 && marks>60){
    console.log("Second division");
}
else if(marks>60&&marks<80){
    console.log("First Division");
}
else if(marks>80){
    console.log('Distinction');
}
else{
    console.log('FAil');
}