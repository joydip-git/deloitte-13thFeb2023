window.addEventListener(
    'DOMContentLoaded',
    function () {
        const titlePanel = document.createElement('div')
        titlePanel.innerText = 'Product Management System'
        titlePanel.classList.add('title-style')
        //document.body.appendChild(titlePanel)
        document.body.insertBefore(
            titlePanel,
            document.querySelector('#divTable')
        )
    }
)