const friends = [
    { id: 1, name: 'Anil', location: 'Bangalore' },
    { id: 2, name: 'Sunil', location: 'Kochi' },
    { id: 3, name: 'Mahesh', location: 'Chennai' },
    { id: 4, name: 'Suresh', location: 'Mumbai' }
]
window.addEventListener('DOMContentLoaded',
    function () {
        const ul = document.querySelector('#ulFriends')
        const select = document.querySelector('#selectFriends')

        friends.forEach(
            function (f) {
                const li = document.createElement('li')
                li.innerText = f.name
                ul.appendChild(li)

                const option = document.createElement('option')
                option.text = f.name
                option.value = f.id
                select.appendChild(option)
            }
        )
    })

function showLocation() {
    const select = document
        .querySelector('#selectFriends')
    const allOptions = select.options
    const index = select.selectedIndex
    const option = allOptions[index]
    //console.log(typeof option.value)
    const found = friends.find(
        function (f) {
            return f.id === Number(option.value)
        }
    )
    if (found) {
        window.alert(`${found.name} is from ${found.location}`)
    }
}