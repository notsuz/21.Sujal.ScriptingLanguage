const inputString = "Hello, World!";
const vowelCount = countVowels(inputString);
console.log(`The string "${inputString}" contains ${vowelCount} vowels.`);

function countVowels(str) {
    if (!str || typeof str !== "string") {
        return "Please provide a valid string.";
    }
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

