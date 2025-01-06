import http from "http";
const server=http.createServer((req,res)=>{
    console.log(req);
    console.log(res);
})