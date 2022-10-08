function contar(){
    var ini = document.getElementById('ini')
    var fim = document.getElementById('txtf')
    var pass = document.getElementById('pass')
    var res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ){
        window.alert('introduza um numero')
        res.innerHTML= 'impossivel contar'
    } else {
        res.innerHTML = ' contando : <br> '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        if (p <= 0){
            window.alert('impossivel contar considerando passo =1 ')
            p=1
        }
        if (i < f){ 
            // contagem crescente
            for (var c =i ; c  <= f ; c += p){
                res.innerHTML += ` ${c}\u{27A1}`
                }
        } else { //contagem decrescente 
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{27A1}`
            }
        } 
        res.innerHTML += `\u{1F51E} `
    } 
}
    /*do { 
         var f = ini+pass
         var g = Number (f.value)
       
        res.innerHTML = ` contar ${g}`
    }while(g <= fim) */
