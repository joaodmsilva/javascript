const questions = [
    "O que aprendi hoje ?",
    "O que me deixou aborrecido e o que poderia fazer para melhorar ?",
    "O que me deixou feliz hoje ?",
    "Quantas pessoas ajudei hoje ?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + questions[index] + "  ---> ")
}

ask()

const answers = []
process.stdin.on('data', data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }else{
        console.log(answers)
        process.exit()
    }
})


process.on('exit', () => {
    console.log(`
        Muito fixe joao
    
        O que aprendeu hoje :
        ${answers[0]}
    
        O que te deixou aborrecido e o que poderias fazer para melhorar foi :
        ${answers[1]}
     
        O que te deixou feliz hoje foi :
        ${answers[2]}
    
        Tu Ajudaste ${answers[3]} pessoas hoje
    
        Volta amanha para novas reflexões
   `)
})