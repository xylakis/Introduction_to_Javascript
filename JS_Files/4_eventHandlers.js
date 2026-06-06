const clrbtn = document.getElementById("clrBtn");
const increaseFontBtn = document.getElementById("increaseFontBtn");
const decreaseFontBtn = document.getElementById("decreaseFontBtn");
let paragraphMouse = document.getElementById("paragraph-mouse");
let wrongBtn = document.querySelector(".wrong");
let rightBtn = document.querySelector(".correct");
let ansPara = document.getElementById("answerParagraph");
const heading = document.getElementById("top-heading");

// heading.addEventListener("click", () => {
// console.log("You clicked the heading!");
// });

// headings.forEach((heading) => {
//     heading.addEventListener("click", () => {
//         console.log("You clicked the heading!");
//     });
// });

wrongBtn.addEventListener("click",()=>{
    ansPara.innerText = "Wrong answer";
})

rightBtn.addEventListener("click",()=>{
    ansPara.innerText = "Right Answer";
})

// clrbtn.addEventListener("click", ()=>{
    
//     const colors = ["blue","red","pink","yellow","green","cyan"];
//     const color = colors[Math.floor(Math.random() * colors.length)]
//     heading.style.backgroundColor = color;
// });

// increaseFontBtn.addEventListener("click", ()=>{
//     let current_p_size = parseFloat(getComputedStyle(paragraph).fontSize);
//     paragraph.style.fontSize = (current_p_size + 1) + 'px';
// });

// decreaseFontBtn.addEventListener("click", ()=>{ 
//     let current_p_size = parseFloat(getComputedStyle(paragraph).fontSize);
//     paragraph.style.fontSize = (current_p_size - 1) + 'px';
// });

// document.querySelector("html").addEventListener("mousemove", e => {

//     paragraphMouse.innerText = `mousemove x: ${e.clientX}, y: ${e.clientY}`;
// });

// function toggleBrightDarkMode(){
    
//     document.documentElement.classList.toggle('mode-dark');

//     const isDark = document.documentElement.classList.contains('mode-dark');
//     document.getElementById('icon-sun').style.display  = isDark ? 'block'  : 'none';
//     document.getElementById('icon-moon').style.display = isDark ? 'none' : 'block';

// }



