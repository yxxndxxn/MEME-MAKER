const colorOptions = Array.from(
    document.getElementsByClassName("color-option")
); //배열 생성
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const line = document.querySelector("span");
const ctx = canvas.getContext("2d");  //getContext는 붓이라고 생각하면 됨..!
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPainting = false;

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
    const lineWidthValue =  event.target.value
    ctx.lineWidth = lineWidthValue;
    line.innerText = `${lineWidthValue}`; //글씨
}
function onColorChange(event) {  //color type
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
function onColorClick(event){  //클릭했을 때 색깔 바뀌기
    const colorValue = event.target.dataset.color; 
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange)
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", onColorClick))