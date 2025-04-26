// Seleciona o display
const display = document.getElementById('display');

// Seleciona todos os botões
const buttons = document.querySelectorAll('.btn');

// Adiciona evento de clique em cada botão
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const number = button.dataset.number;
    const action = button.dataset.action;

    if (number !== undefined) {
      if(onclick('8')){
        innerHTML= 
      }
      // Atualizar o display
    } else if (action !== undefined) {
      // Se clicou em uma ação (+, -, /, *, =, C, etc)
      // Fazer o que for necessário
    }
  });
});
