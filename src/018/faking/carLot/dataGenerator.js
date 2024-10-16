// Dynamically importing an external library
// @faker-js/faker is a library to generate random data
import { Faker, en } from 'https://esm.sh/@faker-js/faker';

let faker; // an "almost-global" variable; it is global ONLY to the code in this file

/**
 * Vehicle is a Constructor Function
 * @param {string} type Vehicle type
 * @param {string} vin Vehicle Identification Number
 * @param {string} license License plat
 * @param {string} color Color of the vehicle
 * @param {number} odometer The number of kilometers on the vehicle
 */
const Vehicle = function(type, vin, license, color, odometer) {
    this.type = type;
    this.vin = vin;
    this.license = license;
    this.color = color;
    this.odometer = odometer;
    this.testDrive = function(distance) {
        const change = parseInt(distance);
        if(!isNaN(change))
            this.odometer += change;
        return change;
    }
}

/**
 * generateVehicle uses the faker library to build information
 * about a car.
 * @returns A Vehicle object
 */
const generateVehicle = function() {
    // Return a random vehicle as an object literal
    return {
        type: faker.vehicle.vehicle(),
        vin: faker.vehicle.vin(),
        license: faker.vehicle.vrm(),
        color: faker.vehicle.color(),
        odometer: faker.string.numeric({ length: 6, allowLeadingZeros: true })
    }
};

/**
 * generateLot is a private/internal utility function to create an array of vehicles
 * for a car lot.
 * @param {number} max The number of elements for the array (e.g. # of vehicles)
 * @returns Array of Vehicle data
 */
const generateLot = function(max) {
    const lot = [];
    for(var count = 0; count < max; count++) {
        lot.push(generateVehicle());
    }
    return lot;
}

const generateTableRows = function() {
    const lot = generateLot(10);
    const htmlRows = lot.map(function(vehicle, index){
        return `<tr>
    <td>${vehicle.type}</td>
    <td>${vehicle.vin}</td>
    <td>${vehicle.license}</td>
    <td>${vehicle.color}</td>
    <td>${vehicle.odometer}</td>
</tr>`;
    });
    return htmlRows.join('\n');
}

/**
 * injectTableData() is a function to create an HTML table in a DOM element
 * filled with fake vehicled data.
 * @param {HTMLElement} element A DOM object that will have its .innerHTML replaced with a table of vehicles
 * @param {number} seed To generate a predictable set of data [NOT WORKING]
 */
const injectTableData = function(element, seed) {
    // seed = seed || Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
    // Reset with a new faker
    const options = { locale: [en,en]};
    // faker is an object declared near the top of this module.
    // It is NOT global, but scoped to this JS module
    faker = new Faker(options); // I'm creating an object
    if(seed) faker.seed(seed);

    console.log("seed:", seed);
    const data = generateTableRows();
    element.innerHTML = `<table>${data}</table>`;
}

// I will make public only the exported items from
// this JavaScript module file
export { injectTableData, Vehicle };
