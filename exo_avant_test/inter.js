    "use strict";
var x = prompt("donner moi une valeur à x"),
    y = prompt("donner moi une valeur  à y"),
    z = prompt("donner moi une valeur à z"); 
     
    if (x == y && y == z) {
        //console.log("les trois variables sont identiques");
        document.write("les trois variables sont identiques");
    } else if (x === y && y != z || x === z && z != y || y === z && z != x ) {
        //console.log("deux des variavles sont de valeurs égales");
        document.write("deux des variables sont de valeurs égales");
    } else {
        //console.log("les trois variables sont différentes");
        document.write("les trois variables sont différentes");
    }
// exercice :

"use strict";
var shortenBytes = prompt("donnez moi une valeur").toUpperCase();
var letter = shortenBytes.substr(-1); 
var number = parseInt(shortenBytes); 

if (isNaN(number)) {
    console.log(false);
} else if (isNaN(letter)) {
   console.log(shortenBytes);
   console.log(letter); 
   console.log(number); 

switch (letter) {

    case "K" : 
        console.log(shortenBytes + " = " + number * 1024 + " octets");
        break ;

    case "M" : 
        console.log(shortenBytes + " = " + number  * 1024 * 1024 + " octets");
        break ;

    case "G" : 
        console.log(shortenBytes + " = " + number * 1024 * 1024 * 1024 + " octets");
        break ;

    case "T" : 
        console.log(shortenBytes + " = " + number * 1024 * 1024 * 1024 * 1024 + " octets");
        break ;

    default :
        console.log(shortenBytes + " = " + number + " octets");
        break ;
}
}

// exo 2 :

//var value = prompt("choissisit un des valeures suivantes : 0 ,1 ,2");
var value = 2;
 "use strict";
    if (typeof(value) === "number") {
        console.log("the value is a number");
    } else if (typeof(value) === "string") {
        console.log("the value is a string");
 }

 switch (value) {

    case "0":
    case 0:    
        console.log("la valeur est égale à 0");
        break;

    case "1":
    case 1:
        console.log("la valeur est supérieur à 0");
        console.log("la valeur est égale à 1");
        break; 
    
    case "2":
    case 2:
        console.log("la valeur est supérieur à 0");
        console.log("la valeur est supérieur à 1");
        console.log("la valeur est égale à 2");
        break;        
    } 

// exo3 : 
    "use strict";
var misteryNumber = 1 , Mynumber = 2 ;
    if (misteryNumber === Mynumber) {
        console.log("congratulation ! ");
    } else
    if (Mynumber < misteryNumber) {
        console.log("+");
    } else {
        console.log("-");
    }

// exo 4
function isTooLong() {
    "use strict";
var x = document.getElementById("string").innerHTML;    
    console.log(typeof(x));
    console.log(x);
    if (x.length >= 10) {
        console.log("true");
    } else {
        console.log("false");
    }
}
isTooLong();