const numbers = [1, 2, 3, 4, 5]

const doubleNumbers = numbers.map(function(num){
    return num * 2;
})

const squaredNumbers = numbers.map(num => num ** 2);

console.log(doubleNumbers)
console.log(squaredNumbers)
