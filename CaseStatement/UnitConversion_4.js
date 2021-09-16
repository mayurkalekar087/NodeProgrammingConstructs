readline = require("readline-sync")
console.log("Press 1 : Feet to Inch")
console.log("Press 2 : Feet to Meter")
console.log("Press 3 : Inch to Feet")
console.log("Press 4 : Meter to Feet")
console.log("------------------------")
let userChoice = readline.question("Enter Your Choice :: ")

switch(userChoice){
    case "1":
        let feet = readline.question("Enter Feet :: ")
        let inches=12
		let	totalInches = feet * inches
		console.log("Feet to Inches : "+ feet +" = " + totalInches)
        break
    case "2" :
        let feet1 = readline.question("Enter Feet :: ")
        let meter = 0.3048
		let	totalMeter = feet1 * meter
		console.log("Feet to Meter : "+ feet1 +" = " + totalMeter)
        break
    case "3":
        let inches1 = readline.question("Enter Inches :: ")        
		let	totalFeet = inches1/12
		console.log("Inches to Feet : "+ inches1 +" = " + totalFeet)
        break
    case "4":
        let meter1 = readline.question("Enter Meter :: ")
        let feet2 = 3.28084
		let totalFeet1 = feet2 * meter1
		console.log("Feet to Meter : "+ meter1 +" = " + totalFeet1)
        break
    default:
        console.log("Invalid Input!!")
        break
}