function contar(){
    let inicio = document.getElementById('inicioi')
    let fim = document.getElementById('fimi')
    let passo = document.getElementById('passoi')
    let res = document.getElementById('res')

    if (passo.value == 0 || inicio.value == 0 || fim.value.lenght == 0){
        window.alert('ERRO digite um valor válido')
    }else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido ! Passo = 1')
            p = 1
        }
        if (i < f){
            for (c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449} `
            }
        }else {
            for (c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            }
                
        }
        res.innerHTML += '\u{1F3C1}'
    }
    
}