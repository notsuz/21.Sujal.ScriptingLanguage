const firstParagraph = document.querySelector('p');
console.log("First Paragraph:", firstParagraph.textContent);

const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');
const p4 = document.querySelector('#p4');

console.log("Paragraph 1:", p1.textContent);
console.log("Paragraph 2:", p2.textContent);
console.log("Paragraph 3:", p3.textContent);
console.log("Paragraph 4:", p4.textContent);

const paragraphs = document.querySelectorAll('p');
console.log("NodeList of all paragraphs:", paragraphs);

paragraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

p4.textContent = "Fourth Paragraph Updated";
console.log("Updated Fourth Paragraph:", p4.textContent);

paragraphs.forEach((p, index) => {
    p.setAttribute('class', `class-paragraph-${index + 1}`);
    p.id = `new-id-${index + 1}`;
});

paragraphs.forEach(paragraph => {
    paragraph.style.color = "white";
    paragraph.style.backgroundColor = "#4CAF50";
    paragraph.style.border = "1px solid black";
    paragraph.style.fontSize = "18px";
    paragraph.style.fontFamily = "Arial, sans-serif";
});

paragraphs[0].style.color = "green"; 
paragraphs[1].style.color = "red";   
paragraphs[2].style.color = "green"; 
paragraphs[3].style.color = "red";   

paragraphs.forEach((paragraph, index) => {
    paragraph.textContent = `Updated Text Content for Paragraph ${index + 1}`;
    paragraph.id = `updated-id-${index + 1}`;
    paragraph.setAttribute('class', `updated-class-paragraph-${index + 1}`);
});