const container = document.querySelector("#container");
const btn = document.querySelector(".btn");

console.log(btn);

btn.addEventListener('click', function() {
    console.log(container.style.backgroundColor); 
    //it will return you the backgroundColor if specified as a inline style
    container.style.backgroundColor = "#117f51";
})

