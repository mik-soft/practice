function transactionsFor(n, arr) {    
    let trans = []
    for(let i = 0; i < arr.length; i++)
    {        
        if(Object.values(arr[i])[0] === n)
        {
            trans.push(arr[i])
        }
    }
    return trans
}

function isItemAvailable(item, num) {       
    let stock = 0
    let t = transactionsFor(item, num)
    for(let i = 0; i < t.length; i++)
    {
        if(Object.values(t[i])[1] === 'in')
        {
            stock += Object.values(t[i])[2]
        } else {
            stock -= Object.values(t[i])[2]
        }
    }
    console.log(stock > 0)
}

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions); 