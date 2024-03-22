let first='';
let second='';
let opt =""
let output = 0;



const Display = document.getElementById("Display");


function Operator(a)
{
console.log("operator",a)
opt=a
Display.value += a;
}   



function Values(a)
{
console.log("values",a)
console.log(opt.length)
if (opt.length == 0){
    first += a;
    Display.value = first;
}
else{
    second += a;
    Display.value += a;
}
console.log(first,opt,second)
}   




function Reasult()
{
    let outputs=0;
    console.log("Reasult")
if( opt == "+"){
console.log(" Addition ")
outputs=Number(first)+Number(second)
console.log(outputs)
}
else if( opt == "-"){
console.log("Subtraction")
outputs=Number(first)-Number(second)
console.log(outputs)

}
else if ( opt == "*"){
    console.log("multiple")
    outputs=Number(first)*Number(second)
    console.log(outputs)
}
else if (opt == "/"){
    console.log( "divide" )
    outputs=Number(first)/Number(second)
    console.log(outputs)
}
else if ( opt == "%" ){
    console.log("percentage")
    outputs=Number(first)%Number(second)
    console.log(outputs)

}
else {
    console.log("notanumber")
}

Display.value=outputs

first=outputs;
opt='';
second=''

}


function clearDisplay()
{
    display.values = ""
}