let decision = 'n'
try {
    do {
        showMenu()
        const choice = askChoice()
        const firstNumber = enterValue()
        const secondNumber = enterValue()

        let result = 0
        switch (choice) {
            case 1:
                result = add(firstNumber, secondNumber)
                break;
            case 2:
                result = subtract(firstNumber, secondNumber)
                break;
            case 3:
                result = multiply(firstNumber, secondNumber)
                break;
            case 4:
                result = divide(firstNumber, secondNumber)
                break;
            default:
                console.log('enter proper choice')
                break;
        }
        printResult(result)
        decision = decideToContinue()
    } while (decision !== 'n')
} catch (err) {
    console.log(err)
}