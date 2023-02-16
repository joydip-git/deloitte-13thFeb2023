function showTitle() {
    const titlePanel = document.createElement('div')
    titlePanel.innerText = 'Product Management System'
    titlePanel.classList.add('title-style')
    //document.body.appendChild(titlePanel)
    document.body.insertBefore(
        titlePanel,
        document.querySelector('#divTable')
    )
}
function loadProducts() {
    const productsBody = document.querySelector('#productsBody')
    products.forEach(
        function (p) {
            const img = document.createElement('img')
            img.setAttribute('src', p.imagepath)
            img.setAttribute('title', p.name)
            img.setAttribute('alt', 'NA')
            img.classList.add('img-style')

            const tdImage = document.createElement('td')
            tdImage.appendChild(img)

            const tdName = document.createElement('td')
            tdName.innerText = p.name

            const tdPrice = document.createElement('td')
            tdPrice.innerText = p.price.toString()

            const tdRating = document.createElement('td')
            tdRating.innerText = p.price.toString()

            const tdDesc = document.createElement('td')
            tdDesc.innerText = p.description

            const tr = document.createElement('tr')
            tr.append(tdImage, tdName, tdPrice, tdRating, tdDesc)
            productsBody.appendChild(tr)
        }
    )
}
window.addEventListener(
    'DOMContentLoaded',
    function () {
        showTitle()
        loadProducts()
    }
)