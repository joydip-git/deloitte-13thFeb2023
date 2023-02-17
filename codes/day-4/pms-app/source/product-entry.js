function addProduct() {
    //fetching all the data from every input control on the form
    const id = Number(document.getElementById('txtId').value)
    const price = Number(document.getElementById('txtPrice').value)
    const rating = Number(document.getElementById('txtRating').value)
    const name = document.getElementById('txtName').value
    const description = document.getElementById('txtDesc').value

    const allUploadedFiles = document.getElementById('imgInput').files
    const actualUploadedFile = allUploadedFiles[0]

    const reader = new FileReader()
    reader
        .addEventListener('load',
            function () {
                //console.log(actualUploadedFile)
                const blob = reader.result
                //console.log(blob)
                const newProduct = new Product(id, name, price, rating, blob, description)
                if (saveProduct(newProduct))
                    window.alert('product saved successfully')
                else
                    window.alert('product with same id already exists')
            }
        )
    reader.readAsDataURL(actualUploadedFile)
}

window.addEventListener(
    'DOMContentLoaded',
    function () {
        this.document
            .getElementById('btnAdd')
            .addEventListener('click', addProduct)
        this.document
            .getElementById('btnNavigate')
            .addEventListener('click',
                function () {
                    window.location = '/index.html'
                })
    }
)
    /*
const obj = [{ name: 'anil', id: 1 }, { name: 'sunil', id: 2 }]
// if (!localStorage.getItem('my-data'))
//     localStorage.setItem('my-data', JSON.stringify(obj))
// else
localStorage.setItem('my-data', JSON.stringify(obj))
console.log(localStorage.getItem('my-data'))
console.log(JSON.parse(localStorage.getItem('my-data')))
//sessionStorage.setItem('my-data', 100)
 
//JSON: JavaScript Object Notation. it is a format to represent data
const x = 100
//{ "x":100}
 
//{ "name": "anil", "id": 1 }
*/
/**
 * <?xml version=1.0">
 * <employee>
 *  <name>
 *      anil
 *  </name>
 *  <id>
 *      1
 *  </id>
 * </employee>
 */
