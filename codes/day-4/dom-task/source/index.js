function doesElementExist(elementId) {
    const elementObject = document.querySelector(elementId)
    if (!elementObject) {
        throw new Error('element does not exist')
    }
    return elementObject
}
function fetchValue(textBoxId) {
    try {
        const textBox = doesElementExist(textBoxId)
        return Number(textBox.value)
    } catch (error) {
        throw error
    }
}
function isChecked(radioButtonId) {
    try {
        const radioButton = doesElementExist(radioButtonId)
        return radioButton.checked
    } catch (error) {
        throw error
    }
}
function createResultPanel(calcResult) {
    const resultTextBox = document.createElement('input')
    //resultTextBox.setAttribute('type', 'text')
    resultTextBox.type = 'text'
    //resultTextBox.setAttribute('readonly', true)
    resultTextBox.readOnly = true
    //resultTextBox.setAttribute('id', 'txtResult')
    resultTextBox.id = 'txtResult'
    //resultTextBox.setAttribute('value', result.toString())
    resultTextBox.value = calcResult.toString()

    const resultLabel = document.createElement('label')
    resultLabel.setAttribute('for', resultTextBox.id)
    resultLabel.innerHTML = 'Result: &nbsp;'

    const divElement = document.createElement('div')
    divElement.id = 'divResult'
    //append() can accept amny child elements as argument
    divElement.append(resultLabel, resultTextBox)

    return divElement
}
function createErrorPanel() {
    const errorDivElement = document.createElement('div')
    errorDivElement.id = 'divError'
    errorDivElement.innerText = ''
    // erroDivElement.setAttribute('style', 'background-color:cadetblue;width:300px')
    //errorDivElement.style.backgroundColor = 'cadetblue'
    errorDivElement.classList.add('error-style')
    //errorDivElement.className='error-style'
    return errorDivElement
}
function appendToForm(element) {
    try {
        const calcFormObject = doesElementExist('#calcForm')
        //appendChild() method accepts only ONE child element as an argument
        calcFormObject.appendChild(element)
    } catch (error) {
        throw error
    }
}
function calculate() {
    try {
        const errorPanel = document.querySelector('#divError')
        if (!errorPanel.hidden) {
            errorPanel.hidden = true
        }

        //fetching text box values
        const first = fetchValue('#txtFirst')
        const second = fetchValue('#txtSecond')

        let result = 0
        if (isChecked('#radioAdd')) {
            result = add(first, second)
        } else if (isChecked('#radioSubtract')) {
            result = subtract(first, second)
        } else if (isChecked('#radioMultiply')) {
            result = multiply(first, second)
        } else if (isChecked('#radioDivide')) {
            result = divide(first, second)
        } else {
            window.alert('select a calculation type')
        }

        const resultTextBox = doesElementExist('#txtResult')
        resultTextBox.value = result.toString()
    } catch (err) {
        const errorPanel = document.querySelector('#divError')
        errorPanel.innerText = err.message
        errorPanel.hidden = false
    }
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        const resultPanel = createResultPanel(0)
        const errorPanel = createErrorPanel()
        appendToForm(resultPanel)
        appendToForm(errorPanel)
        document.querySelector('#divError').hidden = true

        document
            .getElementById('btnCalculate')
            .addEventListener('click', calculate)
    }
)