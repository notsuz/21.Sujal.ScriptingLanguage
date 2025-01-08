const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const suffixes = ["st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    let suffix = (i + 1 <= 3) ? suffixes[i] : "th";
    console.log(`${i + 1}${suffix} choice is ${color[i]}.`);
}
