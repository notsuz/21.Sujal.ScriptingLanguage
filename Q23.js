const dog = {};

console.log("Initial dog object:", dog);

dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function () {
    return "woof woof";
};

console.log("Dog object after adding properties:", dog);

console.log("Dog's name:", dog.name);
console.log("Dog's legs:", dog.legs);
console.log("Dog's color:", dog.color);
console.log("Dog's age:", dog.age);
console.log("Dog's bark sound:", dog.bark());

dog.breed = "Labrador";
dog.getDogInfo = function () {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
};

console.log("Dog object after adding new properties:", dog);
console.log("Dog info:", dog.getDogInfo());
