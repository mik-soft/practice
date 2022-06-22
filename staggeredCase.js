function staggeredCase(str) {
    let s = str.split(' ')
    let newStr = []
    let acc = 0

    s.map((word) => {
        let newWord = []
        word.map((letter) => {
            if(acc % 2 === 0) {
                if(word.match(/[A-Z]/gi)) {
                    newWord.push(letter.toUpperCase())
                    acc++
                } else {
                    newWord.push(letter)
                    //acc++
                }
                    
                } else {
                    if(word.match(/[A-Z]/gi)) {
                        newWord.push(letter.toLowerCase())
                        acc++
                    } else {
                        newWord.push(letter)
                        //acc++
                    }
                }
            
            newStr.push(newWord.join('').toString())            
        });       
    });

    return newStr.join(' ').toString()
}



console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase("I Love Launch School!"))