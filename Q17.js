function getWeekendDates() {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const daysUntilSaturday = (6 - dayOfWeek + 7) % 7;
    const daysUntilSunday = (7 - dayOfWeek + 7) % 7;

    const saturday = new Date(today);
    saturday.setDate(today.getDate() + daysUntilSaturday);

    const sunday = new Date(today);
    sunday.setDate(today.getDate() + daysUntilSunday);

    return {
        saturday: saturday.toDateString(),
        sunday: sunday.toDateString()
    };
}

const weekend = getWeekendDates();
console.log("Upcoming Saturday:", weekend.saturday);
console.log("Upcoming Sunday:", weekend.sunday);
