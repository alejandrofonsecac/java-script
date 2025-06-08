window.onload = function() {

var a = document.getElementById('area')

//Criar um envento, dai nao precisa colocar isso no HTML e deixa td no JS
a.addEventListener('click', clicar)
a.addEventListener('mouseenter', entrar)
a.addEventListener('mouseout', saiu)

        function clicar() {
            a.innerText = 'Clicou!'
            a.style.background = 'red'
        }

        function entrar(){
            a.innerText = 'Entrou!'
            a.style.background = 'lightgreen'
        }

        function saiu(){
            a.innerText = 'Saiu!'
            a.style.background = 'green'
        }
    }
