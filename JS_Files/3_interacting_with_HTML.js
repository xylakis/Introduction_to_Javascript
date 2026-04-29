const heading = document.getElementById("top-heading");
const paragraph = document.getElementById("main-paragraph");
const headingSecond = document.getElementById("second-heading")

console.log(heading.innerText);
console.log(paragraph.innerText);

headingSecond.innerText = "I have changed the Text for my Second Heading!"

let highlightElements = document.querySelectorAll('.highlight')

highlightElements.forEach(el => {
  el.style.backgroundColor = "blue";
});