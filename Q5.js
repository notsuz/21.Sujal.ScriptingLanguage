function getCurrentDate() {
    const today = new Date();

  
    const day = today.getDate().toString().padStart(2, '0'); 
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); 
    const year = today.getFullYear();

    const dayName = today.toLocaleString('en-US', { weekday: 'long' });
    const monthName = today.toLocaleString('en-US', { month: 'long' });

    const format1 = `${month}-${day}-${year}`;
    const format2 = `${month}/${day}/${year}`;
    const format3 = `${day}-${month}-${year}`;
    const format4 = `${day}/${month}/${year}`;
    const format5 = `${year} ${monthName} ${day} ${dayName}`;

    console.log("mm-dd-yyyy:", format1);
    console.log("mm/dd/yyyy:", format2);
    console.log("dd-mm-yyyy:", format3);
    console.log("dd/mm/yyyy:", format4);
    console.log("yyyy month date day:", format5);
}

getCurrentDate();
