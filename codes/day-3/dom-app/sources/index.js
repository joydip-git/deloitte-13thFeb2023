//getElementById(id-value-of-an-element) returns the DOM object representing that HTML tag or element
//addEventListener method is used to attach an event of an HTML element with a function. When that event of that HTML element gets fired, the function gets executed
//DOMContentLoaded is an event which gets fired when the entire DOM tree for the HTML file is created (or loaded in the browser)

function changeText() {
    const headerElement = document
        .getElementById('welcomeHeader')
    headerElement.innerHTML = '<i>Welcome to DOM</i>'
}
function onButtonClick() {
    const buttonObj = document.getElementById('btnChange')
    buttonObj.addEventListener('click', changeText)
}

window.addEventListener('DOMContentLoaded', onButtonClick)
