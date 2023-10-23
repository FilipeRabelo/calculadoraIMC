  // variaveis  - fazendo referencia a elas

  const form     = document.querySelector("form");
  const inPeso   = document.querySelector("#inPeso");
  const inAltura = document.querySelector("#inAltura");

  // CRIANDO UM OBJETO PARA ABRIR E FECHAR O MODAL  //  ESTRUTURA DE DADOS
  const Modal = {

    // VARIAVEIS DO MODAL // fazendo referência as variaveis
    // fazendo referencia aos seletores ou aos IDs para as variaveis
    wrapper:  document.querySelector(".modal-wrapper"),
    message:  document.querySelector('.modal h2 span'),
    btnClose: document.querySelector('.modal button.close'),


    open: function (){   // CRIANDO FUNÇÕES
      Modal.wrapper.classList.add('open'); // add a classe css para APARECER o modal COM A MSG
    },

    close: function (){
      Modal.wrapper.classList.remove('open'); // REMOVE O OPEN E FECHA O MODAL
    }

  }

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


  // EVENTO PARA FECHAR O BUTTON

  Modal.btnClose.onclick = () => {
    Modal.close()   // EXECUTANDO A FUNÇAO // chamando o objeto do modal para fechar
  }


  // FUNCAO PARA CALCULAR O IMC

  function imc (peso, altura){
    return (peso / ((altura/100) ** 2)).toFixed(2)
  }