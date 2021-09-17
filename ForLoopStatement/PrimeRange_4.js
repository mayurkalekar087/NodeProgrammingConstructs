readline=require("readline-sync")
let low=readline.question("Enter the lower range :")
let up=readline.question( "Enter the upper range :")
let flag=1;
for (let i=low+1; i <= up-1; i++ ){
    let flag=0;
    for ( let j=2; j <= i-1; j++ ){
        if ( i % j == 0 )
        {
            flag=1;
            break;
        }
    }
    if  (flag == 0 )
    console.log( "The  prime  numbers are :" + i);            
}
if(flag == 1)
console.log("No prime numbers in the range");