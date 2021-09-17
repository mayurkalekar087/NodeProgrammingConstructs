function oneDigit(num) {
  
    if ((num >= 0) && (num < 10))
        return 1;
    else
        return 0;
}
function isPalUtil
(num , dupNum) {
    if (num == 0) {
        return dupNum;
    } else {
        dupNum = isPalUtil(parseInt(num / 10), dupNum);
    }
    if (num % 10 == dupNum % 10) {
       
        return parseInt(dupNum / 10);
    } else {
        throw e;
    }

}
function isPal(num)
{

    if (num < 0)
        num = (-num);

    var dupNum = (num);

    return isPalUtil(num, dupNum);
}
var n = 121;
try {
    isPal(n);
    console.log("<br>Yes");
} catch (e) {
    console.log("<br>No");
}
n = 156;
try {
    isPal(n);
    console.log("<br>Yes");
} catch (e) {
    console.log("<br>No");
}