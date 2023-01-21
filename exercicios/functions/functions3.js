/*
let subject ='create video'

function createThink(subject){
    subject = 'study'
    return subject
}


console.log(createThink(subject))
console.log(subject)
*/



// ------- hoisting das funções ---------
/*
sayName()

function sayName() {
    console.log('joao')
}
*/

// ------- arrow function ---------

/*
const sayName = (name) => {
    console.log(name)
}

sayName('joao')
*/


// --------- callback function ----------

/*
function sayName (name) {
    console.log('antes da callback')
    name()
    console.log('depois da callback')
}
sayName (
    () => {
        console.log('estou numa callback')
    })

*/

// ----------- Funções construtoras ------------

function Person(name) {
	this.name = name
	this.walk = function() {
		return this.name + " está andando"
	}
}
const mayk = new Person("Mayk")
const joao = new Person("Joao")

console.log(joao.walk())
console.log(mayk.walk())