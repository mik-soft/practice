function buyFruit(arr)
{
    let fruits = []    
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = 0; j < arr[i][1]; j++)
        {
            fruits.push(arr[i][0])
        }
    }
    console.log(fruits)
}




buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
2
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

