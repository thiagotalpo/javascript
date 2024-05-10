function tabuada(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('itab')
    if(num.value == 0){
        alert('Digite um número')
    }else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        for (c; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}