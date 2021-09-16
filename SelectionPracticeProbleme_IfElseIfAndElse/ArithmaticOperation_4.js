let a = 25;
let b = 56;
let c = 95;

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = a + b / c;
let operation4 = a * b + c;

let MAXIMUM_NUMBER = operation1;
let MINIMUM_NUMBER = operation1;
//MAXIMUM_NUMBER
if(MAXIMUM_NUMBER < operation2){
    MAXIMUM_NUMBER = operation2;
} 
if(MAXIMUM_NUMBER < operation3){
    MAXIMUM_NUMBER = operation3;
} 
if(MAXIMUM_NUMBER < operation4){
    MAXIMUM_NUMBER = operation4;
}
//MINIMUM NUmBER
if(MINIMUM_NUMBER > operation2){
    MINIMUM_NUMBER = operation2;
} 
if(MINIMUM_NUMBER > operation3){
    MINIMUM_NUMBER = operation3;
} 
if(MINIMUM_NUMBER > operation4){
    MINIMUM_NUMBER = operation4;
}
console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);
console.log("-------------")
console.log("Maximum Number : "+MAXIMUM_NUMBER);
console.log("Minimum Number : "+MINIMUM_NUMBER);