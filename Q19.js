function removeCharacters(str, num) {
    return str.slice(0, str.length - num);
}

console.log(removeCharacters("Hello, World!", 6)); 
console.log(removeCharacters("JavaScript", 4)); 
console.log(removeCharacters("Test String", 3)); 
