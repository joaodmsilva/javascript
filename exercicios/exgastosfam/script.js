let familia ={
    receitas: [2000, 1300],
    despesas: [950, 50, 20, 37.5, 85, 74, 21.89, 200, 1000]
}

function sum (array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateReceitas = sum(familia.receitas)
    const calculateDespesas = sum(familia.despesas)
    const total = calculateReceitas - calculateDespesas


    if(total > 0){
        console.log(`o saldo é positivo : ${total} €`)
    } else if (total == 0){
        console.log(`saldo nulo: ${total} €`)
    }else{
        console.log(`saldo negativo: ${total} €`)
    }
    
}

calculateBalance()

