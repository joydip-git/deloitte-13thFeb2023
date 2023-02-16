// const headElement = document.createElement('h2')
// headElement.innerText = 'Product Management System'

// const divElement = document.createElement('div')
// divElement.appendChild(headElement)

// document.body.appendChild(divElement)

window.addEventListener(
    'DOMContentLoaded',
    function () {
        const headElement = document.createElement('h2')
        headElement.innerText = 'Product Management System'

        const divElement = document.createElement('div')
        divElement.appendChild(headElement)

        document.body.appendChild(divElement)
    }
)