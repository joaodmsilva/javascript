var agora = new Date() 
var hora = agora.getHours() 
console.log(`sao agora exatamente ${hora} horas`)
if (hora >= 6 && hora < 12){
    console.log(' É de manha ')
} else if (hora >= 12 && hora < 20){
    console.log('É de tarde')
} else if (hora >= 20 && hora < 24){
    console.log('É de noite ')
} else if (hora =24 ){
    console.log('É de madrugada ')
} else if (hora >=0 && hora < 6){
    console.log('É madrugada')
}