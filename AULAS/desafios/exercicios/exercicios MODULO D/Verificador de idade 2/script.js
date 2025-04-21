function verificar(event){
    event.preventDefault()
    /*
    Criança = até 14
    Adolescente = 15 a 17
    Adulto = 18 a 60
    Idoso +61
    */

    var data = new Date()
    var ano = data.getFullYear()
    var iano = document.getElementById('itxtano')
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')

    if(Number(fano.value) > ano){
        alert('[ERRO] Verificque os valores novamente')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(iano.value);
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'mulher'

            if (idade <= 14) {
                img.setAttribute('src', 'mulher-crianca.jpg');
            } else if (idade <= 17) {
                img.setAttribute('src', 'mulher-adolescente.webp');
            } else if (idade <= 60) {
                img.setAttribute('src', 'mulher-adulta.jpeg');
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg');
            }
            

            
        }else if(fsex[1]){
            genero = 'homem'

            if(idade <= 14){
                img.setAttribute('src', 'homem.crianca.webp')
            } else if (idade <= 17){
                img.setAttribute('src', 'homem-adolescente.webp')
            } else if(idade <= 60){
                img.setAttribute('src', 'homem-adulto.jpeg')
            } else{
                img.setAttribute('src', 'homem-idoso.jpeg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}