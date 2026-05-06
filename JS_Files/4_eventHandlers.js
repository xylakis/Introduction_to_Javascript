const clrbtn = document.getElementById("clrBtn");
const increaseFontBtn = document.getElementById("increaseFontBtn");
const decreaseFontBtn = document.getElementById("decreaseFontBtn");

let paragraphMouse = document.getElementById("paragraph-mouse")

heading.addEventListener("click", () => {
console.log("You clicked the heading!");
});

headings.forEach((heading) => {
    heading.addEventListener("click", () => {
        console.log("You clicked the heading!");
    });
});

clrbtn.addEventListener("click", ()=>{
    
    const colors = ["blue","red","pink","yellow","green","cyan"];
    const color = colors[Math.floor(Math.random() * colors.length)]
    
    heading.style.backgroundColor = color;

});

increaseFontBtn.addEventListener("click", ()=>{
    
    let current_p_size = parseFloat(getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = (current_p_size + 1) + 'px';
});

decreaseFontBtn.addEventListener("click", ()=>{
    
    let current_p_size = parseFloat(getComputedStyle(paragraph).fontSize);
    paragraph.style.fontSize = (current_p_size - 1) + 'px';
});

document.querySelector("html").addEventListener("mousemove", e => {
//console.log(`mousemove x: ${e.clientX}, y: ${e.clientY}`)

paragraphMouse.innerText = `mousemove x: ${e.clientX}, y: ${e.clientY}`;

});



