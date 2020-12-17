const { people, ages } = require('./people')

console.log(people, ages) //returns an empty object if there is no module.exports in people.js


const os = require('os')

console.log(os.platform(), os.homedir())