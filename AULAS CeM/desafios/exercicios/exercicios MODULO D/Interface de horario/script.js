function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora <12){
        img.src = 'imagem-de-dia.jpg'
        document.body.style.background='#e2cd9f'
        //Bom dia!
    } else if(hora >= 12 && hora <18){
        //BOA TARDE
        img.src = 'imagem-de-tarde.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //Boa noite
        img.src ='imagem-de-noite.jpg'
        document.body.style.background = '#515154'
    }
}