function leadingSubstrings(str)
{
    let arr = []   
    for(let i = 0; i < str.length; i++)
    {
        arr.push(str.substring(0, i + 1))        
    }  
    console.log(arr)
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]