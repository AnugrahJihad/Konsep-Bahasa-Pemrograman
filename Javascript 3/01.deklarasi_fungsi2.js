function myFunc(theObject) {
    theObject.make = "Toyota";
}

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
}

console.log(myCar.make);
myFunc(myCar);
console.log(myCar.make);