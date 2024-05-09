function carregar(){
    var msg = document.getElementById('texto')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/foto-manha-redondo.png'
        document.body.style.background = '#CFBE92'
    }else if (hora >= 12 && hora < 18){
        img.src = 'imagens/foto-tarde-redondo.png'
        document.body.style.background = '#fcb910'
    }else {
        img.src = 'imagens/foto-noite-redondo.png'
        document.body.style.background = '#0657c3'
    }
}