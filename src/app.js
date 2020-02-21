const container = document.querySelector("#container");
const btn = document.querySelector(".btn");

//const backgrounds = ["#ffa500", "#003366", "#8b0000", "#794044", "#088da5", "#ccff00", "#a0db8e"];
console.log(btn);
let selectedColor; //Can't use const here because if you are declaring const you have to initialize it

const colorStrings = "0123456789abcdef";
btn.addEventListener('click', function() {
    selectedColor = "#";
    console.log(container.style.backgroundColor); 
    //it will return you the backgroundColor if specified as a inline style
    for(let i = 0; i < 6; i++) {
        selectedColor += colorStrings[Math.floor(Math.random()*16)];
    }
    console.log(selectedColor);
    container.style.backgroundColor = selectedColor;
});


