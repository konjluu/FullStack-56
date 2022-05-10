//common JS
 
const fs=require("fs");
const myMath=require("./myMath");
const http=require('http');

// console.log("Sum:" ,myMath.sum(4,5));
// console.log("Sub:" ,myMath.sum(8,3));


//READ FILE
// fs.readFile("hello.txt","utf-8",(err,data)=>{
//     if(!err){
//         console.log(data)
//     }
// });

//HTTP REQ,RES
const PORT=3001;
const server = http.createServer((req,res)=>{
    // console.log("New request is coming here");
    // res.writeHead(200,{'Content-Type':'text/plain'});
    // res.write("<h1>Hello, I am a CEO PUER</h1>")
    // res.end()
    fs.readFile('./index.html','utf-8',(err,data)=>{
        if(!err){
            res.writeHead(200,{'Content-Type':"text/html"});
            res.write(data);
            res.end();
        }
    })
})
server.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`)
})