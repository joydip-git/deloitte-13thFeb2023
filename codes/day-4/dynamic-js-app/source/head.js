console.log('this script will be loaded first because it is attached in head element')

window.addEventListener(
    'DOMContentLoaded',
    function () {
        console.log(document.body)
        const headerElementObject = document.getElementById('messageHeader')
        console.log(headerElementObject)
    }
)
