class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getWidth(): number {
    return this.width;
  }

  setWidth(width: number): void {
    this.width = width;
  }

  getHeight(): number {
    return this.height;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }

  getPerimiter(): number {
    return (this.width + this.height) * 2;
  }
}

const rec = new Rectangle(2, 5);
console.log("Chieu dai:", rec.getHeight());
console.log("Chieu rong:", rec.getWidth());
console.log("Chu vi:", rec.getPerimiter());
console.log("Dien tich:", rec.getArea());
console.log("sau khi cap nhat :");

rec.setHeight(5);
rec.setWidth(20);

console.log("Chieu dai:", rec.getHeight());
console.log("Chieu rong:", rec.getWidth());
console.log("Chu vi:", rec.getPerimiter());
console.log("Dien tich:", rec.getArea());
