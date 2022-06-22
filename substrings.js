function leadingSubstrings(str)
{
    let arr = []   
    for(let i = 0; i < str.length; i++)
    {
        arr.push(str.substring(0, i + 1))        
    }  
    return arr
}

function substrings(str)
{
    let newarr = []   
    let result = []

    for(let i = 0; i < str.length; i++)
    {        
        newarr.push(leadingSubstrings(str.substring(i)))
    } 
    
    for(let i = 0; i < newarr.length; i++)
    {
        for(let j = 0; j < newarr[i].length; j++)
        {
            result.push(newarr[i][j])
        }
    }

    console.log(result)
}

substrings('abcde')