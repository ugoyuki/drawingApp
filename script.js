const canvas = document.getElementById("canvas");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorButton = document.getElementById("color");
const clearButton = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 30;
let x = undefined;
let y = undefined;
let isPressed = false;
let color = "black";

canvas.addEventListener("mousedown",()=>{
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
})
document.body.addEventListener("mouseup",()=>{
    isPressed = false;

    x = undefined;
    y = undefined;
})

canvas.addEventListener("mousemove",(e) =>{
    if (isPressed) {
        
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }
});

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

increase.addEventListener("click",() =>{
    size +=5;

    if (size > 50) {
        size = 50;        
    }
    updateSizeOnScreen();
})
decrease.addEventListener("click",() =>{
    size -=5;
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
})

colorButton.addEventListener("change",(e)=>{
    color = e.target.value;
})

clearButton.addEventListener("click",()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}


// drawCircle(50,50);

// function draw(){
//     // ctx.clearRect(0,0,canvas.clientWidth,canvas.height);
//     // drawCircle(x++,y);

//     requestAnimationFrame(draw);
// }

// draw();