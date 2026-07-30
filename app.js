function generate(){


let game =
document.getElementById("game").value;


let amount =
Number(document.getElementById("amount").value);


let results =
document.getElementById("results");


results.innerHTML="";


let maxNumber;


let numbers;


switch(game){


case "lotto49":

maxNumber=49;
numbers=6;

break;


case "lotto59":

maxNumber=59;
numbers=6;

break;


case "setlife":

maxNumber=47;
numbers=5;

break;


case "euromillions":

maxNumber=50;
numbers=5;

break;


case "eurojackpot":

maxNumber=50;
numbers=5;

break;


}


for(let i=0;i<amount;i++){


let combo=[];


while(combo.length<numbers){


let n =
Math.floor(
Math.random()*maxNumber
)+1;


if(!combo.includes(n))
combo.push(n);


}


combo.sort(
(a,b)=>a-b
);



let div =
document.createElement("div");


div.className="result";


div.innerHTML =
"Varianta "
+(i+1)
+": <br>"
+
combo.join(" - ");



results.appendChild(div);


}


}