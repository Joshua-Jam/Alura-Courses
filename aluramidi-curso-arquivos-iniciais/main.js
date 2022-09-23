function toca_som (idElementoAudio) {   
   document.querySelector(idElementoAudio).play();
}

const lista_teclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < lista_teclas.length; contador++) {

   const tecla = lista_teclas[contador];
   const instrumento = tecla.classList[1];

   const idaudio = `#som_${instrumento}`;

   tecla.onclick = function () {
      toca_som(idaudio);
   }

   tecla.onkeydown = function (evento) {

      console.log(evento.coce == 'Space')

      if (evento.coce === 'Space' || evento.coce === 'Enter') {
         tecla.classList.add('ativa');
      }

   }

   tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
   }

}