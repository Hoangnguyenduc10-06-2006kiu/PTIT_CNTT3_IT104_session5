class Employee {
  public name: string;
  protected company: string;
  private phone: number;
  constructor(name: string, company: string, phone: number) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  printInfo(): void {
    console.log(`Ten: ${this.name}`);
    console.log(`Cong ty: ${this.company}`);
    console.log(`SDT: 0${this.phone}`);
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}

const user = new Employee("Le Van A", "ABCXYZ", 987525613);
user.printInfo();
