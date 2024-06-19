// ES 6 -> Destructuring arrays
const vehicles = ['mustang', 'f-150', 'expedition'];
const [vehicle_1, , vehicle_2] = vehicles;
// console.log(vehicle_1);
// console.log(vehicle_2);

//when functions retuns an array
function calculate(a, b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}
const [add, sub, mul, div] = calculate(5, 10)
// console.log(add, sub, mul, div,)


// ES 6 -> Destructuring Objects
const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}
const vehicleInformation = ({ brand, model, type }) => {
    console.log(`Vehicle Information: type:${type}, model: ${model}, brand: ${brand}`)
}
// vehicleInformation(vehicleOne);

// Destructuring deeply nested objects
const vehicleTwo = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}
vehicleTwoInformation(vehicleTwo);
function vehicleTwoInformation({ brand, registration: { country } }) {
    console.log(`vehicleTwoInformation: brand: ${brand}, country: ${country}`)
}