const firstParagraph = document.querySelector("p");
console.log("First Paragraph:", firstParagraph.textContent);

const para1 = document.querySelector("#para1");
const para2 = document.querySelector("#para2");
const para3 = document.querySelector("#para3");
const para4 = document.querySelector("#para4");
console.log("Paragraphs by ID:", para1.textContent, para2.textContent, para3.textContent, para4.textContent);

const paragraphs = document.querySelectorAll("p");
console.log("All Paragraphs as NodeList:", paragraphs);

paragraphs.forEach((p, index) => {
    console.log(`Paragraph ${index + 1}: ${p.textContent}`);
});

para4.textContent = "Fourth Paragraph";

paragraphs.forEach((p, index) => {
    p.id = `newPara${index + 1}`;
    p.setAttribute("class", `paragraph-${index + 1}`);
});

paragraphs.forEach((p, index) => {
    p.style.color = "black";
    p.style.backgroundColor = index % 2 === 0 ? "#f0f0f0" : "#dcdcdc";
    p.style.border = "1px solid gray";
    p.style.fontSize = "16px";
    p.style.fontFamily = "Arial, sans-serif";
    p.style.padding = "5px";
    p.style.margin = "5px 0";
});

paragraphs.forEach((p, index) => {
    if (index === 0 || index === 2) {
        p.style.color = "green";
    } else if (index === 1 || index === 3) {
        p.style.color = "red";
    }
});

paragraphs.forEach((p, index) => {
    p.textContent = `Updated Paragraph ${index + 1}`;
    p.id = `updatedPara${index + 1}`;
    p.className = `updated-class-${index + 1}`;
});
