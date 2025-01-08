const inputString = "javascript";
const sortedString = sortAlphabetically(inputString);
console.log("Original String:", inputString); 
console.log("Sorted String:", sortedString);

function sortAlphabetically(str) {
    if (!str || typeof str !== "string") {
        return "Please provide a valid string.";
    }
    return str.split('').sort().join('');
}