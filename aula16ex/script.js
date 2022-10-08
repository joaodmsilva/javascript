var num = document.getElementById('num')
var numad = document.getElementById('numadd')  
var res = document.getElementById('res')
var valores = [] //lista valores, indice
function isNumero(n){//verificar se é um numero
    if(Number(n) >= 1 && Number(n) <=100 ) {
        return true
    } else {
        return false
    }
}
function inlista(n, l){ // po n é numero e l é lista, ambos sao parametros da função
    if(l.indexOf(Number(n)) != -1) { // o -1 é numero nao foi encontrado na lista 
        return true
    } else {
        return false
    }
}


function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, valores)){ //se for um numero e diferente do que está na lista
        valores.push(Number(num.value))//o push serve para adicionar os valores á lista
        var item = document.createElement('option') //criar o option (para mostrar o valor inserido)
        item.text = `o valor adicionado foi ${num.value}` // o que nos queremos que seja mostrado (criar o option (para mostrar o valor inserido)
        numad.appendChild(item) //fazer com que o valor apareca
        res.innerHTML = ' '
    } else {
        window.alert('valor invalido ou ja encontrado na lista ')
    }
    num.value = ' ' // dps de introduzir o numero o retangulo fica em brando
    num.focus() //o retangulo fica automaticamente pronto para inserir o numero 
}
function finalizar(){
    if (valores.length == 0 ){
        window.alert('nao existem valroes')
    }else {
        var tot = valores.length //para saber quantos elementos o vetor tem
        var maior = valores[0]  
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores){
            if (valores[pos] > maior){
                maior = valores[pos] 
            } if (valores[pos] < menor ){
                menor = valores[pos] //o valores[pos] é o valor de cada posiçao do elemento
            }
            soma += valores[pos] //para fazer a soma 
            media = soma / tot
        }

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} valores na lista </p>`
        res.innerHTML += `<p> O maior valor inserido foi o  ${maior}  </p>`
        res.innerHTML += `<p> O menor valor inserido foi o  ${menor}  </p>`
        res.innerHTML += `<p> A soma dos valores dá ${soma}  </p>`
        res.innerHTML += `<p> A media dos valores dá ${media}  </p>`
    }
}