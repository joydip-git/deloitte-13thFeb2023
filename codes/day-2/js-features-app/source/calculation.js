function add(firstValue, secondvalue) {
    return firstValue + secondvalue
}
function subtract(firstValue, secondvalue) {
    return firstValue - secondvalue
}
function multiply(firstValue, secondvalue) {
    return firstValue * secondvalue
}
function divide(firstValue, secondvalue) {
    if (secondvalue === 0) {
        const error = new Error('denominator should not be zero')
        throw error
    }
    return firstValue / secondvalue
}