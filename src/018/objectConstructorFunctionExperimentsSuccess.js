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
                                                                                        
console.clear()
let myCar = new Car(1974, 100000)
myCar
myCar.yearBuilt
myCar.currentMileage
myCar.drive(1234)
myCar.currentMileage
myCar
myCar.__proto__
myCar.yearBuilt = 2005
myCar.yearBuilt
myCar
myCar.__proto__