const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


//express app

const app = express()

//connect to mongoDb
const dbURI = 'mongodb+srv://alex:test123@cluster0.9k3y4.mongodb.net/Blogger?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        //listen for requests
        app.listen(3000)
    })
    .catch((err) => console.log(err))


//register view engine (ejs)

app.set('view engine', 'ejs')

//middleware & static files
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))

// //mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'this is a snippet of a new blog',
//         body: 'this is a body of a new blog'
//     })
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => console.log(err))
// })
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch(err => console.log(err))
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById("5fd93348a12bd454bd25fb70")
//         .then((result) => {
//             res.send(result)
//         })
//         .catch(err => console.log(err))
// })




//routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
    // res.sendFile('./views/index.html', { root: __dirname })
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render('index', { title: 'Home', blogs })
})
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about', { title: 'About' })

})

//redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

//blog routes
app.use('/blogs', blogRoutes)

//404 page
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404', { title: 'Not Found' })
})