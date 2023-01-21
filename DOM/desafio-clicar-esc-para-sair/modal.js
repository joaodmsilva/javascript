const openModalButton = document.getElementById('openModal')

const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function() {
    modalWrapper.classList.remove('invisible')
 }

document.addEventListener('keydown', function(event){
    const isEscKey = event.key === 'Escape' //vai verificar se a tecla esc foi clicada ou nao 
    if (isEscKey) { //se for clicada executa o codigo em baixo
        modalWrapper.classList.add('invisible')
    }
})



function c(){
    setTimeout(() => {console.log('c')}, 1000)
    return
}

function b(){
    console.log('b')
    return c()
}

function a(){
    b()
    console.log('a')
    return
}

a()