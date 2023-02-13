//let and const
function test() {
    let x = 10
    console.log(x) //10

    for (let i = 0; i < 1; i++) {
        let x = 20
        console.log(x) //20
    }

    console.log(x) //20
}
test()

function test1() {
    var x = 10
    console.log(x)
}
test1()

const a = 100
//a = 200
console.log(a)