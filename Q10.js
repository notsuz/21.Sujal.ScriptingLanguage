function isArray(input) {
    return Array.isArray(input);
}

console.log(isArray([1, 2, 3])); 
console.log(isArray("Hello"));  
console.log(isArray({ key: "value" })); 
console.log(isArray(123));
