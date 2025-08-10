class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Ten: ${this.name}`);
        console.log(`Cong ty: ${this.company}`);
        console.log(`SDT: 0${this.phone}`);
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
}
const user = new Employee("Le Van A", "ABCXYZ", 987525613);
user.printInfo();
