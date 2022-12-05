const http = require('http')
const port = 8080
const fs = require('fs')
let server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})

    if(req.url =='/')
        fs.createReadStream('./templates/index.html').pipe(res)
    else if(req.url =='/login')
        fs.createReadStream('./templates/login.html').pipe(res)
    else if(req.url =='/news')
        fs.createReadStream('./templates/news.html').pipe(res)
    else if(req.url =='/new_123')
        fs.createReadStream('./templates/new_123.html').pipe(res)
})

server.listen(port, () => {
    console.log('Server listening on: http://localhost:%s', port)
})
