const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil",
    "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China",
    "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador"
];

const columns = 6;

function generateTable(countries, columns) {
    const table = document.createElement("table");
    const tbody = document.createElement("tbody");

    for (let i = 0; i < countries.length; i += columns) {
        const row = document.createElement("tr");

        for (let j = i; j < i + columns; j++) {
            const cell = document.createElement("td");

            if (j < countries.length) {
                cell.textContent = countries[j];
            } else {
                cell.textContent = ""; 
            }

            row.appendChild(cell);
        }

        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    return table;
}

const tableContainer = document.getElementById("countries-table");
const table = generateTable(countries, columns);
tableContainer.appendChild(table);
