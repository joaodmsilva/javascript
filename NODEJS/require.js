//console.log(require('path'))


//modulos nativos
// const path = require('path')

// console.log(path.basename(__filename))



//meus modulos 
// const myModule = require('./exports')
// console.log(myModule)

const getFlagValue = require('./flags')
console.log(`ola ${getFlagValue('--name')}. ${getFlagValue('--greeting')}`)