function verificar(){
    var data = newDateI()
    var ano = datagetFullYear()
    var fano = document.getElementById('inasc')
    var res= document.querySelector('div#res')

    if(fano.ariaValueMax.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    } 
}
        
    



