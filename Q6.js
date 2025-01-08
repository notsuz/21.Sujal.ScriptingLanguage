function daysUntilNextChristmas() {
    const today = new Date();
    const currentYear = today.getFullYear();


    const christmasThisYear = new Date(currentYear, 11, 25); 

    const nextChristmas = today > christmasThisYear 
        ? new Date(currentYear + 1, 11, 25) 
        : christmasThisYear;

    // Calculate the difference in milliseconds
    const msInADay = 24 * 60 * 60 * 1000; // Milliseconds in a day
    const daysLeft = Math.ceil((nextChristmas - today) / msInADay);

    return daysLeft;
}

// Example usage
const daysRemaining = daysUntilNextChristmas();
console.log(`There are ${daysRemaining} day(s) left until next Christmas.`);
