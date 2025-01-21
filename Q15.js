function dateDifference(date1, date2) {
    const diffTime = Math.abs(date2 - date1); 
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays;
}

const date1 = new Date("2025-01-01");
const date2 = new Date("2025-01-08");
console.log(date1);
console.log(date2);
console.log(`The difference is ${dateDifference(date1, date2)} days.`);
