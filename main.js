function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);   //seletorAudio é um parâmetro para a função tocaSom funcionar
    
    if(elemento === null){
        alert('Elemento nulo.')

    }
    else{
        elemento.play();

    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //A constante não muda, então sempre manterá as mesmas funções. o document.querySelectorAll('.tecla') vai pegar todos os elementos do html com a classe tecla, ou seja, todas as teclas.

// let é uma referência váriavel por exemplo, i é o nosso contador

// a diferença do for para o while é que no for você pode declarar a referência váriavel dentro dos parentêses.

//para
for(let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
       
    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){
        
        if(evento.code === 'Space' || evento.code === 'Enter'){      //se apertar a tecla espaço ou (||) enter o evento será verdadeiro.
            tecla.classList.add('ativa');
        }

    }     //.onkeydown é para quando a tecla for pressionada.

    
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');

    } // quando a tecla é solta
}
