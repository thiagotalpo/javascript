function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert("ERRO! Verifique o Ano")
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var imagem = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10) {
                imagem.setAttribute('src', 'imagens/bebe.png')
            }else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/homem-jovem.png')
            }else if (idade <50) {
                imagem.setAttribute('src', 'imagens/homem-adulto.png')
            }else {
                imagem.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                imagem.setAttribute('src', 'imagens/bebe.png')
            }else if (idade < 21) {
                imagem.setAttribute('src', 'imagens/mulher-jovem.png')
            }else if (idade <50) {
                imagem.setAttribute('src', 'imagens/mulher-adulta.png')
            }else {
                imagem.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(imagem)

}

