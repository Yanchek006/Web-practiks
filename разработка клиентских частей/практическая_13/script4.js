let counts=setInterval(updated);
let upto=0;
function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===2040)
    {
        clearInterval(counts);
    }
}

let counts1=setInterval(updateds);
let upto1=0;
function updateds(){
    var count1= document.getElementById("counter1");
    count1.innerHTML=++upto1;
    if(upto1===2990)
    {
        clearInterval(counts1);
    }
}

let counts2=setInterval(updatedss);
let upto2=0;
function updatedss(){
    var count2= document.getElementById("counter2");
    count2.innerHTML=++upto2;
    if(upto2===1000)
    {
        clearInterval(counts2);
    }
}

let counts3=setInterval(updatedsss);
let upto3=0;
function updatedsss(){
    var count3= document.getElementById("counter3");
    count3.innerHTML=++upto3;
    if(upto3===742)
    {
        clearInterval(counts3);
    }
}

