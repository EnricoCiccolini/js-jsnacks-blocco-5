const nums = [2, 8, 4, 7, 12, 87];

const oddNumbers = nums.filter(number =>{
    const isOdd = number %2
    if (isOdd === 0){
        return true
    }
})

console.log(oddNumbers)
// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]