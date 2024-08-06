const fileInput = document.getElementById("file");
const destroyBtn = document.getElementById("destroy-btn");
const eraserBtn = document.getElementById("eraser-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
); //배열 생성
const modeName = document.querySelector("h3");
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const line = document.querySelector("span");
const ctx = canvas.getContext("2d");  //getContext는 붓이라고 생각하면 됨..!

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

ctx.lineWidth = lineWidth.value;

let isPainting = false;
let isFilling = false;

//mouse painting
function onMove(event) {
    if (isPainting) { //isPainting가 true일때 정의
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
function startPainting() {
    isPainting = true;
}
function cancelPainting() {
    isPainting = false;
}

//optional function
function onLineWidthChange(event) {
    const lineWidthValue = event.target.value
    ctx.lineWidth = lineWidthValue;
    line.innerText = lineWidthValue; //글씨
}
function onColorChange(event) {  //color type
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event) {  //클릭했을 때 색깔 바뀌기
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

function onModeClick() {
    if (isFilling) {  //채우기 모드
        isFilling = false;
        modeBtn.innerText = "Fill";
        modeName.innerText = "Mode: Draw";
    } else { //그리기 모드
        isFilling = true;
        modeBtn.innerText = "Draw";
        modeName.innerText = "Mode: Fill";

    }
}
function onCanvasClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
function onDestroyClick() { //초기화
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
function onEraserClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Erase";
    modeName.innerText = "Mode: Erase";
}

function onFileChange(event){
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image(); //html에서 <img src""></img>와 똑같은 거임
    image.src = url;

    image.onload = function(){  //eventListener랑 같은 거임
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("mouseleave", onCanvasClick);

lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick))

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraserBtn.addEventListener("click", onEraserClick);

fileInput.addEventListener("change", onFileChange);