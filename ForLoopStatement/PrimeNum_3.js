readline=require("readline-sync")
let num=readline.question("Enter the number : ")

flag=0
for (let i=2; i <= num/2; i++ ){
  if ( num % i == 0 )
    flag=1 
}
if (flag == 1 )
  console.log(num + " is not Prime")
else
  console.log(num +" is Prime");