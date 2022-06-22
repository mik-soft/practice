function swapCase(str){
    let s = str.split('')
    let newStr = []

    s.map((letter) => {
        if(letter === letter.toUpperCase()) {
            newStr.push(letter.toLowerCase())
        } else if(letter === letter.toLowerCase()) {
            newStr.push(letter.toUpperCase())
        } else {
            newStr.push(letter)
        }
    });

    console.log(newStr.join('').toString())
}

swapCase('CamelCase')
swapCase('Tonight on XYZ-TV')