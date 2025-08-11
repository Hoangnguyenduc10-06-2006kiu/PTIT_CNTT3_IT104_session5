// Định nghĩa lớp Student với các thuộc tính: 
// id: number 
// age: number
// email: string 
// Khai báo mảng để chứa các sinh viên được tạo ra từ lớp đã định nghĩa.
// Tạo ra các thực thể sinh viên và lưu vào mảng, tiến hành duyệt mảng và in ra các sinh viên trong mảng.
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    getInfoStudent() {
        return `ma hoc sinh: ${this.id} | tuoi hoc sinh: ${this.age} | email: ${this.email}`;
    }
}
let listStudent = [];
;
let student1 = new Student(1, 20, "student1E@gmail.com");
let student2 = new Student(2, 10, "studen2E@gmail.com");
let student3 = new Student(3, 90, "student3E@gmail.com");
listStudent.push(student1);
listStudent.push(student2);
listStudent.push(student3);
for (const student of listStudent) {
    console.log(student.getInfoStudent());
}
