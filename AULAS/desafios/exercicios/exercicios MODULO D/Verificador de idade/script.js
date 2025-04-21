function verificar(event){
    event.preventDefault()

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade <= 10){
                img.setAttribute('src', 'menino.jpg')
            } else if (idade <= 18){
                img.setAttribute('src', 'homem-adolescente.jpg')
            } else if (idade <= 50){
                img.setAttribute('src', 'homem-adulto.jpg')
            } else {
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade <= 10){
                img.setAttribute('src', 'menina.jpg')
            } else if (idade <= 18){
                img.setAttribute('src', 'mulher-adolescente.jpg')
            } else if (idade <= 50){
                img.setAttribute('src', 'mulher-adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}
