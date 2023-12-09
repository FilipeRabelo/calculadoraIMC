  // CRIANDO UM OBJETO PARA ABRIR E FECHAR O MODAL  //  ESTRUTURA DE DADOS

  export const Modal = {

  // VARIAVEIS DO MODAL // fazendo referência as variaveis
  // fazendo referência aos seletores ou aos IDs para as variaveis
  wrapper:  document.querySelector(".modal-wrapper"),
  message:  document.querySelector('.modal h2 span'),
  btnClose: document.querySelector('.modal button.close'),


  open: function (){  // CRIANDO FUNÇÕES
    Modal.wrapper.classList.add('open'); // add a classe css para APARECER o modal COM A MSG
  },

  close: function (){
    Modal.wrapper.classList.remove('open'); // REMOVE O OPEN E FECHA O MODAL
  }

  }

  // EVENTO PARA FECHAR O BUTTON

  Modal.btnClose.onclick = () => {
    Modal.close()       // EXECUTANDO A FUNÇAO // chamando o objeto do modal para fechar
  }


  window.addEventListener('keydown', handleKeydown);

  function handleKeydown(evento){
    if(evento.key === "Escape"){
      Modal.close();    // funcao criada para fechar
    }
  }