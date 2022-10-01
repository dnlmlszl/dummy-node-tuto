const http = require('http')
// if we use return: after res.end being called multiple times, the simplest solution for you would either to return after each res.end.
// if we use else if and else instead just use if, then the problem solves itself, the server does not stop
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('Here is our history')
    } else
    res.end(`
    <h1>Oops!</h1>
    <p>Something went wrong</p>
    <a href='/'>Home</a>
    `)
})

server.listen(5000)