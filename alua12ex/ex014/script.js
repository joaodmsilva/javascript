function carregar () {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date() 
var hora = data.getHours()
var m1 = data.getMinutes()
var sec = data.getSeconds()
setTimeout('carregar(), 500') // recarrega a função carregar() a cada 500 milisegundos
//var hora = 
//var m1= 23
msg.innerHTML = `Agora são ${hora}horas e ${m1} minutos e ${sec} segundos `  
    if (hora >= 0 && hora < 12){
        //bom dia 
        img.src = 'manha.png'
        document.body.style.background = '#BCD4E0'
        msg.innerHTML +='<p> BOM DIA ! </p>'
    } else if (hora >=12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#D1BBA7'
        msg.innerHTML +='<p> BOA TARDE ! </p>'
    }else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#2B3138'
        msg.innerHTML +='<p> BOA NOITE ! </p>'
    }

}

