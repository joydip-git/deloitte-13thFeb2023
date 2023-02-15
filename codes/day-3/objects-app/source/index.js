class Person {
    constructor(pname, pid, psalary, pdept, pprojects) {
        this.name = pname
        this.id = pid
        this.department = pdept
        this.salary = psalary
        this.projects = pprojects
    }
    print() {
        return `${this.name}, ${this.department}, ${this.salary}`
    }
}

const khushiObject = new Person('khushi', 1001, 100000, 'EDU', ['CITA', 'STA'])
console.log(khushiObject.department)
console.log(khushiObject['salary'])
const infoOfKhsuhi = khushiObject.print()
console.log(infoOfKhsuhi)

const srirupObject = new Person('srirup', 1002, 110000, 'LEARNING', ['A'])
const infoOfSrirup = srirupObject.print()
console.log(infoOfSrirup)