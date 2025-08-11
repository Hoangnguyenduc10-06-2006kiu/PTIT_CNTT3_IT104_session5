/*Định nghĩa lớp Vehicle với các thuộc tính:
name : Tên phương tiện (kiểu  chuỗi ).
năm : Năm sản xuất (kiểu  số ).
Hãng : Hãng xe (kiểu  dây ).
Tạo hai đối tượng từ lớp  Vehicle , với các giá trị khác nhau cho các thuộc tính.
Truy cập và trong thông tin của cả hai đối tượng, bao gồm tên, năm sản xuất và hãng xe.*/
class Vehicle {
    constructor(nameValue, yearValue, companyValue) {
        this.name = nameValue;
        this.year = yearValue;
        this.company = companyValue;
    }
}
class car extends Vehicle {
    constructor(nameValue, yearValue, companyValue) {
        super(nameValue, yearValue, companyValue);
        this.name;
        this.year;
        this.company;
    }
    showInfo() {
        console.log(`ten xe oto:${this.name} | nam san xuat:${this.year} | hang xe oto: ${this.company}`);
    }
}
let car1 = new car("toyota", 2017, "red");
car1.showInfo();
