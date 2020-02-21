const container = document.querySelector("#container");
const btn = document.querySelector(".btn");

const backgrounds = ["#ffa500", "#003366", "#8b0000", "#794044", "#088da5", "#ccff00", "#a0db8e"];
console.log(btn);
let selectedColor; //Can't use const here because if you are declaring const you have to initialize it

btn.addEventListener('click', function() {
    console.log(container.style.backgroundColor); 
    //it will return you the backgroundColor if specified as a inline style
    console.log(backgrounds[Math.floor(Math.random()*backgrounds.length)]);
    selectedColor = backgrounds[Math.floor(Math.random()*backgrounds.length)];
    container.style.backgroundColor = selectedColor;
});

