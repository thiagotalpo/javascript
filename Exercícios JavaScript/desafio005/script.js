let num = document.getElementById('num')
let lista = document.getElementById('snum')
let res = document.getElementById('res')
let valor = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valor)) {
        valor.push(Number(num.value))    
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('Digite um número entre 1 e 100 ou número já foi adicionado')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valor.length == 0){
        alert('Adicione valores')
    } else {
        let total = valor.length
        let maior = valor[0]
        let menor = valor[0]
        let soma = 0
        let media = 0
        for (let pos in valor){
            soma += valor[pos]
            if (valor[pos] > maior)
                maior = valor[pos]
            if (valor[pos] < menor)
                menor = valor[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores informados foi ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados foi ${media}</p>`
    }
}