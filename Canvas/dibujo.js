const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2, true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.moveTo(120, 180);
ctx.lineTo(188, 180);
ctx.lineTo(160, 125);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(0, 0, 0)';
ctx.moveTo(270, 180);
ctx.lineTo(210, 180);
ctx.lineTo(240, 125);
ctx.fill();

ctx.beginPath();
ctx.moveTo(265, 210);
ctx.quadraticCurveTo(230, 330, 130, 210);
ctx.quadraticCurveTo(230, 230, 265, 210);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = 'rgb(255, 255, 255)';
ctx.moveTo(210, 220);
ctx.lineTo(188, 219);
ctx.lineTo(200, 245);
ctx.fill();
