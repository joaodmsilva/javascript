// const {EventEmitter} = require('events')
// const ev = new EventEmitter()

//console.log(ev)

// ev.on('saySomathing' , (message) => {
//     console.log(' eu ouvi voce : ', message )
// })

// ev.emit('saySomathing', "Joao")
// ev.emit('saySomathing', "Ines")
// ev.emit('saySomathing', "Tomas")

// ----------------------------------------------------------------



// ev.once('saySomathing' , (message) => {
//     console.log(' eu ouvi voce : ', message )
// })

// ev.emit('saySomathing', "Joao")
// ev.emit('saySomathing', "Ines")
// ev.emit('saySomathing', "Tomas")



// ----------------------------------------------------------------

const { inherits } = require('util')
const { EventEmitter } = require('events')

function Character(name){
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character('chapolin');
chapolin.on('help', () => console.log(` Eu! o ${chapolin.name} colorado!`))

console.log('Oh! E agora, quem poderá me defender ?')
chapolin.emit('help')