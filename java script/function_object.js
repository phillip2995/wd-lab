//crfeating an object using constructor functio
function car(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
    console.log(this.make=" " + this.model + " " + this.car);
}
//creating instances(objects) of the car class
const car1 = new car("toyota", "corolla",2022);
const car2 = new car("honda", "civic",2021);

//accesing object properties of car1 and car2
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);