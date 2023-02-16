function fetchValue(textBoxId) {
    const textBox = document.querySelector(textBoxId)
    if (textBox) {
        return Number(textBox.value)
    } else
        throw new Error('text box id is incorrect')
}
function isChecked(radioButtonId) {
    const radioButton = document.querySelector(radioButtonId)
    if (radioButton) {
        return radioButton.checked
    } else
        throw new Error('radio button id is incorrect')
}
function calculate() {
    try {
        //fetching text box values
        const first = fetchValue('#txtFirst')
        const second = fetchValue('#txtSecond')

        let result = 0
        if (isChecked('#radioAdd')) {
            result = add(first, second)
        }
        if (isChecked('#radioSubtract')) {
            result = subtract(first, second)
        }
        if (isChecked('#radioMultiply')) {
            result = multiply(first, second)
        }
        if (isChecked('#radioDivide')) {
            result = divide(first, second)
        }

        const resultTextBox = document.createElement('input')
        resultTextBox.setAttribute('type', 'text')
        resultTextBox.setAttribute('readonly', 'readonly')
        resultTextBox.setAttribute('id', 'txtResult')
        //resultTextBox.setAttribute('value', result.toString())
        resultTextBox.value = result.toString()

        const resultLabel = document.createElement('label')
        resultLabel.setAttribute('for', resultTextBox.id)
        resultLabel.innerHTML = 'Result: &nbsp;'

        const divElement = document.createElement('div')
        divElement.append(resultLabel, resultTextBox)

        const calcFormObject = document.querySelector('#calcForm')
        if (calcFormObject) {
            calcFormObject.appendChild(divElement)
        } else
            throw new Error('form id is incorrect')

    } catch (err) {
        const errorDivElement = document.createElement('div')
        errorDivElement.innerText = err.message
        // erroDivElement.setAttribute('style', 'background-color:cadetblue;width:300px')
        //errorDivElement.style.backgroundColor = 'cadetblue'
        errorDivElement.classList.add('error-style')
        //errorDivElement.className='error-style'
        const calcFormObject = document.querySelector('#calcForm')
        if (calcFormObject) {
            calcFormObject.appendChild(errorDivElement)
        } else
            throw new Error('form id is incorrect')
    }
}


window.addEventListener(
    'DOMContentLoaded',
    function () {
        document
            .getElementById('btnCalculate')
            .addEventListener('click', calculate)
    }
)