function listOfNums(n)
{
    let arr = []
    let added = []   
    for(let i = 0; i < n.length; i++)
    {
        arr.push(n.slice(0, i + 1))        
    }  

    for(let i = 0; i < arr.length; i++)
    {
        let sum = 0
        for(let j = 0; j < arr[i].length; j++)
        {
            sum = sum + parseInt(arr[i][j])
        }
        added.push(sum)
    }
    return added
}

function sumOfSums(nums)
{
    let sum = 0
    let sums = listOfNums(nums)
    for(let i = 0; i < sums.length; i++)
    {
        sum = sum + sums[i]
    }

    console.log(sum)
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35