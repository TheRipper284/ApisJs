const lienzo = document.querySelector('#canva');
const ctx = lienzo.getContext('2d');

let dirX = 1;
let dirY = 1;

let idx =10;
let idy = 10;

let ini = 0;

function rgbRandom(){
    const letras = '0123456789abcdef';
    let colorRgb = '#';
    for(let i=0; i < 6; i++){
        colorRgb += letras.charAt(Math.floor(Math.random() * 16));
    }
    return colorRgb;
}

function cuadradito(x, y){
    ctx.fillStyle = rgbRandom();
    ini += 2;
    ctx.fillRect(x, y, 40, 40);
    ctx.strokeRect(x, y, 40, 40)
}

function bolita(x, y){
    ctx.fillStyle = rgbRandom();
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
   // ctx.stroke();
}

//ctx.fillRect(0, 0, 650, 400);
setInterval(() => {
    ctx.fillStyle = rgbRandom();
    //ctx.clearRect(0, 0, 600, 400);
    bolita(idx, idy);
    idx++;
    if(idx > 650) idx = 0;
    if(dirX === 1 && dirY === 1){
        idx += 1;
        idy += 1;
    } else if (dirX === 1 && dirY === 2){
        idx += 1;
        idy -= 1;
    } else if (dirX === 2 && dirY === 1){
        idx -= 1;
        idy += 1;
    } else {
        idx -= 1;
        idy -= 1;
    }

    //Cambiar direcciones
    if(idx > 590) dirX = 2;
    if(idx < 10) dirX = 1;
    if(idy > 390) dirY = 2;
    if(idy < 10) dirY = 1;
}, 10);