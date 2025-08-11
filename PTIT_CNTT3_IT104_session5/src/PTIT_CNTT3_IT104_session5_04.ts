class Vehicle05 {
  public name: string;
  protected year: number;
  private company: string;
  readonly id: number;

  constructor(id: number, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }

  showVehicle(): void {
    console.log(`ID: ${this.id}`);
    console.log(`Ten xe: ${this.name}`);
    console.log(`Hang xe: ${this.company}`);
    console.log(`Nam san xuat: ${this.year}`);
  }
}

let vehicle1 = new Vehicle05(1, "abc", 2020, "Honda");
vehicle1.showVehicle();
