var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var raio = 10;

function desenhaCirculo(evento) {

    var raio2 = evento.shiftKey;
    var limite = evento.altKey;
    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    pincel.fillStyle = 'blue';
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + ',' + y);


    //exercio limitando o tamnho do circulo

    if (raio2 == true) {
        raio = raio + 10;   //incrementa + 10 no tamanho do raio do circulo quando pressionado shit
    }

    if (raio >= 50) {
        raio2 = false;  //limita o tamanho maximo do raio a 50
        raio = 50;
    }

    if (limite == true) {
        raio = raio - 5;    //diminui em 5 no tamanho do raio do circulo quando pressionado alt
    }

    if (raio <= 5) {
        limite = false; //limita o tamanho minimo do circulo a 10
        raio = 10;
    }

    /*if( raio2 == true){ resolução para o circulo crescer o maximo possivel na tela
        raio = raio + 10;
    } */

    /*if( raio2 == true){
        raio  + 10;
    } else {
        raio = 10;  resolução do exercicio para criar circulo segurando o shift e apos solto, retorna o normal
    } */


}

tela.onclick = desenhaCirculo;

