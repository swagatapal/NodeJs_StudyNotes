// const http  = require('http');
// const req = http.request('http://www.google.com',(res)=>{
//     res.on('data',(chunk)=>{
//         console.log(`Data chunk ${chunk}`);
//     });
//     res.on('end',()=>{
//         console.log(`no more data`);
//     });
// }) 

const {request}  = require('http');
const req = request('http://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`Data chunk ${chunk}`);
    });
    res.on('end',()=>{
        console.log(`no more data`);
    });
})




req.end();