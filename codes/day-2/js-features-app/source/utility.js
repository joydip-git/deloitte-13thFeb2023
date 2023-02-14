//printing menu
function showMenu() {
    window.alert('1. Add 2. Subtract 3. Multiply 4. Divide')
}
function askChoice() {
    let value = window.prompt('Enter Choice[1/2/3/4]: ', 0)
    if (value > 4 || value < 1) {
        throw new Error('enter choice between 1 and 4')
    }
    return Number(value)
}
function enterValue() {
    let value = window.prompt('Enter Value: ', 0)
    if (value === '') {
        throw new Error('enter any value greter than zero')
    }
    return Number(value)
}
function printResult(value) {
    if (value !== '')
        console.log(value)
    else
        throw new Error('passed emty string as argument')
}
function decideToContinue() {
    let value = window.prompt('Like to continue? [y/Y/n/N]: ', 'n')
    if (value === '') {
        throw new Error('enter choice: Y/y/N/n')
    }
    return value.toLocaleLowerCase()
}