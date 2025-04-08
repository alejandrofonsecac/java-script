window.onload = function(){

    

    function calcular() {
        var txtv = document.getElementById('input#txtvel')
        var vel = Number(txtv.value)
        var res = document.querySelector('div#res')

        res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}</strong></p>`
        res.innerHTML = `<p>Dirija sempre com cinto de segurança!</p>`

        if(vel > 60){
            res.innerHTML = 'MULTADO'
        }else{
            res.innerHTML = 'Não multado'
        }
    }
}