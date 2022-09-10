var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

function desenhaEsquadro(xa, ya, xc, yc, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.moveTo(xa, ya);
    pincel.lineTo(xa, yc);
    pincel.lineTo(xc, yc);
    pincel.fill();

}

desenhaEsquadro(50, 50, 400, 400, "black");
desenhaEsquadro(100, 175, 275, 350, "white");

/*pincel.fillStyle="white";
pincel.beginPath();
pincel.moveTo(100, 175);
pincel.lineTo(100, 350);
pincel.lineTo(275, 350);
pincel.fill();*/
