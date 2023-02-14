//{ prop-name1:value, prop-name2:value}
//id (number), name (string), price (number), description (string)
//{id:1, name:'iPhone 14', price: 140000, description:''}

const products = [
    {
        id: 2,
        name: 'iPhone 14',
        price: 140000,
        description: 'new phone from apple'
    },
    {
        id: 1,
        name: 'dell xps',
        price: 120000,
        description: 'new laptop from dell'
    },
    {
        id: 3,
        name: 'the pillars of the earth',
        price: 4000,
        description: 'new book from Ken Follet'
    }
]
/*
const filteredProducts = products.filter(
    function (p) {
        return p.price >= 100000
    }
)
const result = filteredProducts.map(
    function (p) {
        return p.name
    }
)
result.forEach(
    function (name) {
        console.log(name)
    }
)
*/
console.log(
    products
        .filter((p) => p.price >= 100000)
        .map((p) => p.name)
)
   // .forEach((name) => console.log(name))