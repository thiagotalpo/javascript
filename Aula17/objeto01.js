let amigo = {nome:'José',
sexo:'M',
idade: 18,
engordar(p=0){
   console.log('Engordou')
   this.peso += p
}}

amigo.engordar(2)
