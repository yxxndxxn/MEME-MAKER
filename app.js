const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");  //getContext는 붓이라고 생각하면 됨..!
canvas.width =800;
canvas.height =800;

ctx.moveTo(50, 50);  //브러쉬의 좌표를 움직여줌
ctx.lineTo(150,50);  //라인을 그려줌
ctx.lineTo(150,150);
ctx.lineTo(50,150);
ctx.lineTo(50,50);
ctx.fillStyle ="green";
ctx.fill();

ctx.beginPath();  //새 경로 시작
ctx.fillStyle ="skyBlue";
ctx.fillRect(200, 300, 40, 200);  //왼쪽 벽
ctx.fillRect(400, 300, 40, 200);  //오른쪽 벽
ctx.fillRect(200, 300, 200, 20);  //윗쪽 벽
ctx.fillRect(200, 500, 240, 20);  //아랫쪽 벽
ctx.fillRect(300, 400, 40, 100);  //문

ctx.moveTo(200, 300);  //지붕
ctx.lineTo(320, 200);
ctx.lineTo(440, 300);

ctx.fill();