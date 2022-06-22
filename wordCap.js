function wordCap(str)
{
    let s = str.split(' ')
    let newStr = []
    for(let i = 0; i < s.length; i++)
    {
        let first = s[i].charAt(0).toUpperCase()
        //s.slice(1)
        newStr.push(first + s[i].slice(1, str.length).toString().toLowerCase())
    }

    console.log(newStr.join(' ').toString())

}


wordCap('four score and seven')
wordCap('the javaScript language')
wordCap('this is a "quoted" word')