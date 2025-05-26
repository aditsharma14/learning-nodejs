const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(202, "Good", { "Content-Type": "text/plain" });
    res.end("<h1>Hello World </h1>");
});
server.listen(3000,()=>console.log("Server Up!"));