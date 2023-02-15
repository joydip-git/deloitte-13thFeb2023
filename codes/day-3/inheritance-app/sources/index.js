//Parent or base class
class Person {
    constructor(pname, pid, psalary) {
        this.name = pname
        this.id = pid
        this.salary = psalary
    }
    print() {
        return `${this.name}, ${this.salary}`
    }
}
//derived or child class
class Trainer extends Person {
    constructor(pname, pid, psalary, psubject) {
        super(pname, pid, psalary)
        this.subject = psubject
    }
    print() {
        return `${super.print()}, ${this.subject}`
    }
}
const joydipTrainer = new Trainer('joydip', 1, 10000, 'JavaScript')
//derived or child class
class Trainee extends Person {
    constructor(pname, pid, psalary, pdept, pprojects) {
        super(pname, pid, psalary)
        this.department = pdept
        this.projects = pprojects
    }
    print() {
        return `${super.print()}, ${this.department} `
    }
}
const anilTrainee = new Trainee('Anil', 1001, 100000, 'EDU', ['A', 'B'])