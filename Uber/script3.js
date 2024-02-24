class UberPrice {
    constructor(distance,duration,baseFare,costPerMile,costPerMinute) {
           this.distance = distance;
           this.duration = duration;
           this.baseFare = baseFare;
           this.costPerMile = costPerMile;
           this.costPerMinute = costPerMinute
    }
    totalPrice(){
        return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute)
    }
}
const uber = new UberPrice(5,10,85,15,3)
console.log(uber.totalPrice())

// Output:
// 190