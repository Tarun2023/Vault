const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome to our server')
    }
    else if(req.url === '/about'){
        res.end('A short history about this server : Made by a newbie to NodeJS,creator is trying to learn it as soon as possible so you have to work with what is given here')
    }
    else{
    res.end(`
    <h1>OOOOOoops!!!!</h1>
    <p>I havent made the page you are trying to access,Sorry :(</p>
    <a href="/">Back to Home Page</a>    
    `)   
    }
})

server.listen(5000)