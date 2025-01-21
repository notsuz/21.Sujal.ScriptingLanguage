
let dog = {};

console.log(dog);

dog.name = "Buddy";
dog.legs = 4;
dog.color = "Brown";
dog.age = 3;
dog.bark = function() {
    return "Woof Woof";
};

console.log("Name: " + dog.name);
console.log("Legs: " + dog.legs);
console.log("Color: " + dog.color);
console.log("Age: " + dog.age);
console.log("Bark: " + dog.bark());

dog.breed = "Golden Retriever";
dog.getDogInfo = function() {
    return `${this.name} is a ${this.breed} dog, aged ${this.age} years with ${this.legs} legs and ${this.color} color.`;
};

console.log("Breed: " + dog.breed);
console.log(dog.getDogInfo());
