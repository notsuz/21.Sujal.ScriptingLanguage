const yearElement = document.querySelector("h1");
const dateTimeElement = document.getElementById("date-time");
const challenges = document.querySelectorAll("ul li");

const getRandomColor = () =>
    `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

setInterval(() => {
    yearElement.style.color = getRandomColor();
}, 1000);

setInterval(() => {
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
    dateTimeElement.style.backgroundColor = getRandomColor();
    dateTimeElement.style.color = "white";
    dateTimeElement.style.padding = "5px";
    dateTimeElement.style.borderRadius = "5px";
    dateTimeElement.style.margin = "10px 0";
}, 1000);

challenges.forEach((challenge) => {
    if (challenge.textContent.includes("Done")) {
        challenge.style.backgroundColor = "green";
        challenge.style.color = "white";
    } else if (challenge.textContent.includes("Ongoing")) {
        challenge.style.backgroundColor = "yellow";
        challenge.style.color = "black";
    } else if (challenge.textContent.includes("Coming")) {
        challenge.style.backgroundColor = "red";
        challenge.style.color = "white";
    }
    challenge.style.padding = "10px";
    challenge.style.margin = "5px 0";
    challenge.style.borderRadius = "5px";
    challenge.style.listStyle = "none";
});
