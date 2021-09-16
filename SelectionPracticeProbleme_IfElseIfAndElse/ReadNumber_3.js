readline = require("readline-sync")
let digit = readline.question("Enter Number :: 1,10,100... :: ")

if(digit == 1){
    console.log("ONE")
} else if(digit == 10){
    console.log("TEN")
} else if(digit == 100){
    console.log("HUNDRED")
} else if(digit == 1000){
    console.log("THOUSAND")
} else if(digit == 10000){
    console.log("TEN THOUSAAND")
} else if(digit == 100000){
    console.log("ONE LAKH")
} else if(digit == 1000000){
    console.log("TEN LAKH")
} else {
    console.log("Invalid Input")
}