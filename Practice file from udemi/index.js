const { Console } = require('console');
const http = require ('http');

const PORT = 3000;

const server = http.createServer((req,res)=>{

    if(req.url === "/hi"){
        res.writeHead(200, {
            "Content-Type":"text/plain",
        });
        res.end('hellow sir !!');
    }else if(req.url === "/message")
    {
        res.writeHead(200, {
            "Content-Type":"text/plain",
        });
        res.end('how are you !!');
    }else{
        res.statusCode = 400;
        res.end();
    }
    
})

server.listen(PORT, ()=>{
    console.log(`server listen on ${PORT}`);
})
