function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.getElementById('res')
if (fano.value.length == 0 || fano.value > ano) {
    window.alert('verifica os dados e tenta novamente')
} else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number (fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('img' , 'foto')
    if (fsex[0].checked) { // fsex[0].checked) quer dizer que verifica a posicao 0 neste caso o masculino
        genero = 'Homem'
        if (idade >= 0 && idade < 18){
            img.setAttribute('src', 'rapaz.png')  
        }else if (idade < 26){
            img.setAttribute('src', 'homemjovem.png')
        } else if (idade < 65){
            img.setAttribute('src', 'homemadulto.png')
        } else {
            img.setAttribute('src', 'homemidoso.png')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 18){
            img.setAttribute('src', 'rapariga.png')
        }else if (idade < 26){
            img.setAttribute('src', 'mulherjovem.png')
        } else if (idade < 65){
            img.setAttribute('src', 'mulheradulta.png')
        } else {
            img.setAttribute('src', 'mulheridosa.png')
        }
    }
    res.innerHTML = `<p> detetamos <strong> ${genero} </strong> com <strong> ${idade} </strong> anos </p>`
    res.appendChild(img) //adicinar o elemento img ou seja as imagens 
}
}