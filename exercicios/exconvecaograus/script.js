function transform(degree){
    const celsiusExists = degree.toUpperCase().includes('ºC')
    const fahrenheitExists = degree.toUpperCase().includes('F')
    
    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists){
            throw new Error('grau nao identificado')
    }  

    //fluxo ideial, f -> c
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = ' ºC'

    //fluxo alternativo, c -> f
   if(celsiusExists){
    updatedDegree = Number(degree.toUpperCase().replace("ºC", ""));
    formula = (celcius) => celcius * 9/5 + 32
    degreeSign = ' F'
   }


    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transform('50F'))
    console.log(transform('50ºC'))
    console.log(transform('50Z'))
}catch (error){
    console.log(error)
}

