//Global object

// console.log(global)

setTimeout(() => {
    console.log("hello from timeout")
    clearInterval(interval)
}, 3000)

const interval = setInterval(() => {
    console.log("hello from interval")

}, 1000)

console.log(__dirname)
console.log(__filename)

