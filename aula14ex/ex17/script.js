function calcular (){
    var nmr = document.getElementById('nmr')
    var res = document.getElementById('res')
    var tbd = document.getElementById('tbd')
    //var tbd = ' '
    if (nmr.value.length == 0){
        window.alert('digite um numero')
    } else {
        var n = Number (nmr.value)
        tbd.innerHTML = ' ' //para quando digitar outro numero apague o anterior e coloque o atual
    }
    for (var a = 0 ; a <=10 ; a++){
        //tbd += n+ "x" +a+ "=" +n*a +"<br/>"
        // tbd += `${n} x ${a} = ${n*a} <br/>`
        //res.innerHTML = (` ${tbd} `)
        var item = document.createElement('option')//criou-se um item option para ser inserido no select
        item.text = ` ${n} x ${a} = ${n*a}  ` //parte de dentro do option
        item.value = `tbd ${item}`
        tbd.appendChild(item) //adicionar o elemento filho o item para aparecer no selection
        
    }
}