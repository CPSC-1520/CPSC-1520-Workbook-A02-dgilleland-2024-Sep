const Car = function(year, odometer) {
    let theYear = year;
    const driveCar = function(distance) {
        odometer += distance;
    }

    this.__proto__ = {
      get yearBuilt() {
        return theYear;
      },
      get currentMileage() {
        return odometer;
      },
      get drive() {
        return driveCar;
      }
    }
}
