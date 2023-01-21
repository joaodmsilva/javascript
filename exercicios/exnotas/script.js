let notas = 100


if(notas >= 90 && notas <=100){
    console.log('A')
}else if(notas <=89 && notas >=80){
    console.log('B')
}else if(notas <=79 && notas >=70){
    console.log('C')
}else if(notas <=69 && notas >=60){
    console.log('D')
}else if(notas <=60 && notas >=0){
    console.log('F')
}
else{
    console.log('invalido')
}


// -------- fazer de  outra maneira --------

function getScore(score){
    let scoreA = score >= 90 && score <=100
    let scoreB = score >= 80 && score <=89
    let scoreC = score >= 70 && score <=79
    let scoreD = score >= 60 && score <=69
    let scoreF = score < 60 && score >=0
    if (scoreA){
        scoreFinal = "A"
    } else if (scoreB){
        scoreFinal = "B"
    } else if (scoreC){
        scoreFinal = "C"
    } else if (scoreD){
        scoreFinal = "D"
    } else if (scoreF){
        scoreFinal = "F"
    }else {
        scoreFinal = "Invalido"
    }
    return scoreFinal
}

console.log(getScore(102))
console.log(getScore(100))
console.log(getScore(12))
console.log(getScore(80))
console.log(getScore(70))
console.log(getScore(60))
console.log(getScore(-2))
