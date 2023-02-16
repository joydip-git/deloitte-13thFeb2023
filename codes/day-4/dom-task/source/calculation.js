const add = (first, second) => first + second;
const subtract = (first, second) => first - second;
const multiply = (first, second) => first * second;
const divide = (first, second) => {
    if (second === 0) {
        throw new Error('denominator shoud not be zero')
    }
    return first / second
}