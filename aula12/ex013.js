 var agora =  new Date()
 var diaSem = agora.getDay()
 /*
 0 - Domingo
 1 - Segunda 
 2 - terça
 3 - quarta
 4 - quinta
 5 - sexta
 6 - sabado
 */
console.log(`o dia de hora é ${diaSem} `)
switch(diaSem){
    case diaSem = 0:
        console.log('Domingo')
        break
     case diaSem = 1:
        console.log('Segunda')
        break
    case diaSem = 2:
        console.log('terça')
        break
    case diaSem = 3:
        console.log('quarta')
        break
    case diaSem = 4:
        console.log('quinta')
        break
    case diaSem = 5:
        console.log('sexta')
        break
    case diaSem = 6:
    console.log('sabado')
    break
    default :
    console.log('errro')
    break
}