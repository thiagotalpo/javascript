let num = [8, 4, 5, 9, 3] //criação de um array
console.log(num)
console.log(`Tamanho do vetor é ${num.length}`)
console.log(`Em ordem crescente o array fica desta forma ${num.sort()}`)
console.log(`Adicionando um elemento na ultima posição ${num.push(2)}`)
console.log(`Em ordem crescente o array fica desta forma ${num.sort()}`)
console.log(num)
//num[3] = 6 - Adiciona um número ao array indicando a posição
//num.push(2) - Adiciona um elemento a ultima posição do array
//num.length - Mostra o tamanho do array
//num.sort() - Arruma os elementos em ordem crescente

let c = 0
for(c; c < num.length; c++){
    console.log(`Este é um jeito de imprimir os valores de um array: ${num[c]}`)
}

for(c in num) {
    console.log(`Este é outro jeito de imprimir os valores de um array: ${num[c]}`)
}

//num.indexOf(elemento) - Buscar o índice do elemento e retorná-lo, se não houver o elemento citado retorna '-1'