  // IMPORTANDO O MODAL
  import { Modal } from './modal.js';

  // variaveis  - fazendo referencia a elas

  const form     = document.querySelector("form");
  const inPeso   = document.querySelector("#inPeso");
  const inAltura = document.querySelector("#inAltura");




  // EVENTO PARA ENIVAR O FORM
  form.onsubmit  = function(evento) {

    evento.preventDefault(); // PARA EVITAR O PADRAO

    const peso   = inPeso.value;
    const altura = inAltura.value;

    const resultado = imc(peso, altura);

    const message   = `Seu IMC é de ${resultado}`;   // MSG PARA O MODAL

    Modal.message.innerText = message;  // ENVIANDO A MSG

    Modal.open();   // EXECUTANDO A FUNÇAO // chamando o objeto do modal para abrir

  }

  // FUNCAO PARA CALCULAR O IMC

  function imc (peso, altura){
    return (peso / ((altura/100) ** 2)).toFixed(2)
  }