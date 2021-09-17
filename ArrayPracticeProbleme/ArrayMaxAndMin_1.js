function print2Smallest( arr, arr_size)
{
    let i, first, second;
    if (arr_size < 2)
    {
        console.log(" Invalid Input ");
        return;
    }
 
    first=Number.MAX_VALUE ;
    second=Number.MAX_VALUE ;
    for (i = 0; i < arr_size ; i ++)
    {
        if (arr[i] < first)
        {
            second = first;
            first = arr[i];
        }
        else if (arr[i] < second && arr[i] != first)
            second = arr[i];
    }
    if (second == Number.MAX_VALUE )
        console.log("There is no second smallest element\n");
    else
        console.log("The smallest element is " + first + " and second "+
            "Smallest element is " + second +'\n');
}    
    let arr = [ 15, 50, 44, 10, 84, 18 ];
    let n = arr.length;
    print2Smallest(arr, n);