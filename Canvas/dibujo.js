const canvas = document.getElementById("canva");
const ctx = canvas.getContext("2d");

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.ellipse(200, 200, 100, 90, 45, 30, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.ellipse(200, 200, 100, 70, 45, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.ellipse(200, 200, 100, 50, 45, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.ellipse(200, 200, 100, 30, 45, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

ctx.fillStyle = 'rgb(255, 128, 0)';
ctx.beginPath();
ctx.ellipse(200, 200, 100, 10, 45, 0, Math.PI * 2, true);
ctx.stroke();
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

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(145, 120); 
ctx.lineTo(110, 90); 
ctx.closePath();
ctx.fillStyle = "green";
ctx.fill();
ctx.stroke();