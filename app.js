const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");  //getContext는 붓이라고 생각하면 됨..!
canvas.width =800;
canvas.height =800;

//경로 1 (와 약간 아텍이네 ㄷㄷ!!)
ctx.rect(50, 50, 100, 100);
ctx.fillStyle ="skyBlue";
ctx.fill();

ctx.beginPath();  //새 경로 시작하기: beginPath()

//경로 2
ctx.rect(150, 150, 100, 100);
ctx.fillStyle ="green";
ctx.fill();