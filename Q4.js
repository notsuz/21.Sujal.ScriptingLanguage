
const inputString = "hello world! this is javascript.";
const result = capitalizeFirstLetters(inputString);
console.log("Original String:", inputString);
console.log("Capitalized String:", result);

function capitalizeFirstLetters(str) {
    if (!str || typeof str !== "string") {
        return "Please provide a valid string.";
    }

    
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}


