class Circle {
    constructor(radius = "1.0",color = "red"){
          this.radius = radius;
          this.color = color;
      }
      get radius(){
       return this._radius;
      }
      set radius(radius){
        this._radius = radius;
      }
      get color(){
        return this._color;
      }
      set color(color){
        this._color = color;
      }
      toString(){
        return `Circle [radius = ${this._radius}, color = ${this.color}]`
      }
      getArea(){
        return Math.PI * Math.pow(this._radius,2)
      }
      getCircumference(){
        return 2 * Math.PI * this._radius 
      }
}
const circle = new Circle(2, "green");
console.log(circle.toString())
console.log("Area:", circle.getArea())
console.log("Circumference:", circle.getCircumference())

// Output
// Circle [radius = 2, color = green]
// Area: 12.566370614359172
// Circumference: 12.566370614359172