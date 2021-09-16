readline = require("readline-sync")
let digit = readline.question("Enter Digit between  1 to 7  ")

if(digit == 1){
    console.log("MONDAY")
} else if(digit == 2){
    console.log("TUESDAY")
} else if(digit == 3){
    console.log("WEDNESDAY")
} else if(digit == 4){
    console.log("THURSDAY")
} else if(digit == 5){
    console.log("FRIDAY")
} else if(digit == 6){
    console.log("SATURDAY")
} else if(digit == 7){
    console.log("SUNDAY")
} else {
    console.log("Invalid Input")
}