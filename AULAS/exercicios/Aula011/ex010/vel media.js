window.onload = function(){

    

    function calcular() {
        var txtv = document.getElementById('textvel')
        var res = document.querySelector('div#res')
        var vel = Number(txtv.value)
        res.innerHTML =`<p> Sua velocidade atual é de <strong>${vel}Km/h</strong>`
    

        if(vel > 60){
            res.innerHTML += `<p> Sua velocidade atual é de <strong>${vel}Km/h</strong>, você está acima do limite, MULTADO!</p>`
        }else{
            res.innerHTML += `<p> Diriga sempre com cinto de segurança</p>`
        }
    }
}