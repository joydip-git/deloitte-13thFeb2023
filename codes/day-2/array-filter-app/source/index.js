/*
//callback mechanism
function call(fnArg, firstParam, secondParam) {
    fnArg(firstParam, secondParam)
    //     console.log(typeof arg)
    //     if ((typeof arg) === 'function') {
    //         arg(10, 20)
    //     }
}
// call(12)
// call('joydip')
// call(true)
// call({ name: 'anil', id: 1 })
// call([1, 2, 3, 4])
function add(first, second) {
    console.log(first + second)
}
call(add, 10, 20)

function solveITIssue() {
    console.log('solved IT issue')
}
function getMarkers() {
    console.log('got markers')
}

function assistTrainer(assistanceFn) {
    assistanceFn()
}

assistTrainer(solveITIssue)
*/
function filterValues(arr, logicFn) {
    const result = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const status = logicFn(element)
        if (status) {
            result.push(element)
        }
    }
    return result
}
/*
const numbers = [1, 3, 2, 4, 5, 7, 6, 8, 0, 9]
function isEven(num) {
    return num % 2 === 0 ? true : false
}
function isOdd(num) {
    return num % 2 !== 0 ? true : false
}
let criteria = 5
function isGreaterThan(num) {
    return num > criteria ? true : false
}
const evenNumbers = filterValues(numbers, isEven)
const oddNumbers = filterValues(numbers, isOdd)
const greaterNumbers = filterValues(numbers, isGreaterThan)
console.log(evenNumbers)
console.log(oddNumbers)
console.log(greaterNumbers)
*/
const people = ['srirup', 'abhinav', 'neha', 'anushka', 'pragati', 'aditya', 'khushi']

const letter = window.prompt('enter a letter', '').toLocaleLowerCase()
//arrow function (used ONLY with expression style function)
const doesContainLetter = (name) => {
    if (name !== '' || name !== undefined) {
        let temp = name.toLocaleLowerCase()
        if (temp.indexOf(letter) !== -1)
            return true
        else
            return false
    } else {
        throw new Error('either the name is undefined or empty string')
    }
}
//const filteredPeople = filterValues(people, doesContainLetter)
const filteredPeople = people.filter(doesContainLetter)
console.log(filteredPeople)

const numbers = [1, 3, 2, 4, 5, 7, 6, 8, 0, 9]

const evenNumbers = numbers.filter(
    function (num) {
        return num % 2 === 0
    }
)
console.log(evenNumbers)

const oddNumbers = numbers.filter(
    (num) => {
        return num % 2 !== 0
    }
)
console.log(oddNumbers)

const greaterNumbers = numbers.filter((num) => num > 5)
// const printNumber = function (num) {
//     console.log(num)
// }
// const printNumber = (num) => {
//     console.log(num)
// }
// const printNumber = (num) => console.log(num)
// greaterNumbers.forEach(printNumber)

greaterNumbers.forEach((num) => console.log(num))

//numbers.sort(compare)
function sortValues(arr, logicFn) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const comparisonValue = logicFn(arr[i], arr[j])
            if (comparisonValue > 0) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
}
const compare = function (a, b) {
    return a - b
}
//sortValues(numbers, compare)
numbers.sort(compare)
console.log(numbers)

//filter, forEach, sort, pipe, find, findIndex

