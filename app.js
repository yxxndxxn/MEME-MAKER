const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");  //getContext는 붓이라고 생각하면 됨..!
canvas.width = 800;
canvas.height = 800;

ctx.arc(200, 200, 50, 0, 2*Math.PI); //얼굴
ctx.fillStyle = "green";
ctx.fill();

//눈
ctx.beginPath();
ctx.arc(188, 195, 5, 0, 2*Math.PI);  
ctx.arc(212, 195, 5, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();

//입
ctx.beginPath();
ctx.arc(200, 208, 24, 0, 1*Math.PI);
ctx.fillStyle = "orange";
ctx.fill();