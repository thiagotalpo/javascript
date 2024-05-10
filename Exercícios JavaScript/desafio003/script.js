function contar(){
    let inicio = document.getElementById('inicioi')
    let fim = document.getElementById('fimi')
    let passo = document.getElementById('passoi')
    let res = document.getElementById('res')

    if (passo.value == 0 || inicio.value == 0 || fim.value == 0){
        window.alert('ERRO digite um valor válido')
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
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