function local() {
    let a = 100
    this.x = 200
}
//constuctor function: used to store values with property names in an object
function person(pname, pid, psalary, pdept, pprojects) {

    this.name = pname
    this.id = pid
    this.department = pdept
    this.salary = psalary
    this.projects = pprojects

    this.print = function () {
        //templated string (string interpolation)
        return `${this.name}, ${this.department}, ${this.salary}`
        //return this.name + ' ' + this.department + ' ' + this.salary
    }
    //return this
}
const khushiObject = new person('khushi', 1001, 100000, 'EDU', ['CITA', 'STA'])
const srirupObject = new person('srirup', 1002, 110000, 'LEARNING', ['A'])
console.log(window)

//accessing value properties from an object
console.log(khushiObject.department)
console.log(khushiObject['salary'])

//accessing functional properties from an object
const infoOfKhsuhi = khushiObject.print()
const infoOfSrirup = srirupObject.print()
//const info = khushiObject['print']()
console.log(infoOfKhsuhi)
console.log(infoOfSrirup)

// console.log(khushiObject.print())

function employee(pname, pid, psalary, pdept, pprojects) {
    //object-literal syntax
    let obj = {
        name: pname,
        id: pid,
        department: pdept,
        salary: psalary,
        projects: pprojects,
        print: function () {
            //templated string (string interpolation)
            return `${this.name}, ${this.department}, ${this.salary}`
            //return this.name + ' ' + this.department + ' ' + this.salary
        }
    }
    return obj
}

const amitObj = person('amit', 1003, 120000, 'DEP', ['B', 'C'])