class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimiter() {
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
