class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    studentInfo() {
        console.log(`ID: ${this.id}, Tuoi: ${this.age}, Email: ${this.email}`);
    }
}
let arrStudent = [];
arrStudent.push(new Student(1, 18, "abc@gmail.com"));
arrStudent.push(new Student(2, 19, "xyz@gmail.com"));
for (let i = 0; i < arrStudent.length; i++) {
    arrStudent[i].studentInfo();
}
