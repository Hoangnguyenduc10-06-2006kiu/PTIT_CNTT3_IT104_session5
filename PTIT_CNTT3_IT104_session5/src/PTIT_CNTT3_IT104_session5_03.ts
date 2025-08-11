// Định nghĩa lớp Employee có các thuộc tính: 
// name: tên nhân viên có phạm vi truy cập là public
// company: tên công ty có mức phạm vi truy cập là protected
// phone: số điện thoại có mức phạm vi truy cập cập là private
// printInfo(): phương thức để In ra tất cả thuộc tính
// Tạo ra một thực thể từ lớp Employee và gọi phương thức printInfo() để in ra các thuộc tính.

class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  printInfo(){
    console.log(`ten nha nvien: ${this.name} | ten cong ty: ${this.company} | SDT: ${this.phone}`)
  }
}

let Employee1= new Employee("hoang nguyen duc","samsung","02345678")
  Employee1.printInfo();