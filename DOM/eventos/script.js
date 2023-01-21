// ---- EVENTOS ----

// function print(){
//     console.log('print')
// }



// const input = document.querySelector('input');

// input.onkeydown = function(){
//     console.log('rodei')
// }




// const h1 =  document.querySelector('h1');

// h1.addEventListener('click', print)

// function print(){
//     console.log('print')
// }




// const h1 =  document.querySelector('h1');

// h1.addEventListener('click', print)

// function print(){
//     console.log('print')
// }

// h1.addEventListener('click', function(){
//     console.log('outro nome')
// })




// --------- Agumento Event -----------

const input = document.querySelector('input');

input.onkeydown = function(event){
    console.log(event) //ver os tipos de event que existem
}

