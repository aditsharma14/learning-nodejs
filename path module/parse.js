const path=require("path");
console.log(path.parse(__filename));
 console.log(path.parse(__filename).base);
 console.log(path.parse(__filename).name);
 console.log(path.parse(__filename).ext);