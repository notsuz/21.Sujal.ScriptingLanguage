
const numbers = [10, 5, 20, 8, 30];
findLargestNumber(numbers);

function findLargestNumber(numbers) {
    console.log("Input Array:", numbers);

    if (!Array.isArray(numbers) || numbers.length === 0) {
        console.error("Error: Invalid input. Please provide a non-empty array of integers.");
        return;
    }

    const largest = Math.max(...numbers);
    console.log(`The largest number is: ${largest}`);
}
