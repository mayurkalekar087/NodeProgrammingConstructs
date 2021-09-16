readline = require("readline-sync")
let digit = readline.question("Enter Digit between : 1 to 10 : ")

if(digit == 1){
    console.log("ONE")
} else if(digit == 2){
    console.log("TWO")
} else if(digit == 3){
    console.log("THREE")
} else if(digit == 4){
    console.log("FOUR")
} else if(digit == 5){
    console.log("FIVE")
} else if(digit == 6){
    console.log("SIX")
} else if(digit == 7){
    console.log("SEVEN")
} else if(digit == 8){
    console.log("EIGHT")
} else if(digit == 9){
    console.log("NINE")
} else if(digit == 10){
    console.log("TEN")
} else {
    console.log("Invalid Input")
}