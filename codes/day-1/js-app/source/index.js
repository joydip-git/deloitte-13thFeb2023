const numbers = [1, 2, 4, 3, 6, 5]
//numbers = [10, 20]
//const numbers = new Array(1, 2, 4, 3, 6, 5)
numbers.push(10, 20, 30)
//numbers.splice(2,2) <-- deletion
//numbers.splice(2, 2, 400, 300) <-- replacement
numbers.splice(2, 0, 400, 300) //adding value starting at specific index

const copy = numbers.slice(1, 3)
console.log(copy)

//numbers.shift()
numbers.unshift(11, 22)

console.log(numbers[2])

