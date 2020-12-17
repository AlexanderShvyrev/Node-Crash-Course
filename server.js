const http = require('http')
const fs = require('fs')
const _ = require('lodash')

//creating server
const server = http.createServer((req, res) => {

    //lodash
    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() => {
        console.log('hello')
    })
    greet() //lodash runs the function only once



    //set header content type

    res.setHeader('Content-type', 'text/html');

    let path = './views/'

    switch (req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break
        //redirecting
        case '/about-us':
            res.statusCode = 301 //permanently moved
            res.setHeader('Location', '/about')
            res.end()
            break
        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    //send an html file 
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            // res.write(data)
            res.end(data)
        }

    })
    // res.write('<h1>Hello everyone</h1>')
    // res.write('<p>Hello again</p>')
    // res.end()
})

server.listen(3000, 'localhost', () => {
    console.log("Listening on port 3000")
})
