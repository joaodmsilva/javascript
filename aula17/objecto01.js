 var amigo = {nome: 'jose', 
 sexo:'m', 
 peso:85.4, 
 engordar(p=0){
   this.peso += p
 }}
amigo.engordar(20)
 console.log(` ${amigo.peso} e ${amigo.nome} `)
 
