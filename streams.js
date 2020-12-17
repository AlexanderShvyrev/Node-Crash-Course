const fs = require('fs')

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' }) //starts streaming from blog3

const writeStream = fs.createWriteStream('./docs/blog4.txt')

// readStream.on('data', (chunk) => { //event listener
//     console.log('-------new chunk')
//     console.log(chunk)
//     writeStream.write('\nNEW CHUNK\n')
//     writeStream.write(chunk)
// })


//piping

readStream.pipe(writeStream)//creates blog4.txt and writes contents of blog3.txt into it