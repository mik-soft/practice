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

    return result
}

function palindromes(str) {
    let subs = substrings(str)
    let pals = []
    for(let i = 0; i < subs.length; i++)
    {
        let word = subs[i]
        let firstHalf = ''
        let secondHalf = ''
        if(word.length % 2 !== 0)
        {
            firstHalf = word.substring(0, word.length/2 + 1)
            secondHalf = word.substring(word.length/2, word.length)
        }
        else {
            firstHalf = word.substring(0, word.length/2)
            secondHalf = word.substring(word.length/2, word.length)
        }
        
        let reversed = ''
        for(let i = secondHalf.length - 1; i >= 0; i--)
        {
            reversed = reversed + secondHalf.charAt(i)
        }       
       
        if(firstHalf === reversed && word.length > 1)
        {
            pals.push(word)
        }
    }
    console.log(pals)
}


palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" 