// const products = [
//     new Product(1, 'Dell XPS', 165000, 4.5, '../images/dell.jfif', 'new laptop from dell'),
//     new Product(2, 'HP Probook', 120000, 4, '../images/hp.jfif', 'new laptop from hp'),
//     new Product(3, 'Lenovo ThinkPad', 130000, 4.2, '../images/lenovo.jfif', 'new laptop from lenovo')
// ]
function saveProduct(p) {
    if (localStorage.getItem('products')) {
        const products = JSON.parse(localStorage.getItem('products'))
        const found = products.find(
            function (pr) {
                return pr.id === p.id
            }
        )
        if (!found) {
            products.push(p)
            localStorage.setItem('products', JSON.stringify(products))
            return true
        } else
            return false
    } else {
        localStorage.setItem('products', JSON.stringify([p]))
        return true
    }
}
function getProducts() {
    if (localStorage.getItem('products'))
        return JSON.parse(localStorage.getItem('products'))
    else
        return []
}