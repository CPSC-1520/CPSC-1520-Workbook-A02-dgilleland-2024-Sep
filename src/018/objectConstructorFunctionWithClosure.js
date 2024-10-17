const Car = function(year, odometer) {
  this.year = year;
  this.odometer = odometer;
  this.drive = function(distance) {
    this.odometer += distance;
  }
}

let myCar = new Car(1974, 130000);
myCar
myCar.drive(500)
myCar
myCar.odometer = 90000
myCar
console.clear()
const Person = function(name, dob) {
  let dateOfBirth = dob;
  this.name = name;
  this.age = function() {
    return 2024 - dateOfBirth.getFullYear();
  }
}
let jeff = new Person('Jeff Jeffries', new Date('Jan 5, 1980'));
jeff
jeff.age()
let sally = new Person('Sally Smith', new Date('Mar 12, 1985'));
sally.age()
sally.dateOfBirth = new Date('Aug 1, 2000')
sally
sally.age()