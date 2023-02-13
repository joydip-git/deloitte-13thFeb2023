var a = 100
var b = true
var c = 'Deloitte'
var name = 'joydip'
var obj = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    isManager: false,
    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

var arr = {
    0: 10,
    1: 20,
    2: 30
}
console.log(obj.name)
console.log(obj['salary'])
var info = obj.print()
console.log(info)
//d() //this will work fine
//function declaration
function d() {
    console.log('d')
}

//e() //this will throw error
//function expression
var e = function () {
    console.log('e')
}

console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)
console.log(typeof e)


