// readfile
const fs =require("fs")
fs.readFile("text.txt","hex",(error,data)=>{
  if(error)console.log(error)
  else
  console.log(data.toString())

})
// fsreadfile
const g =require("fs")

console.log(g.readFileSync("text.txt","utf-8"))
console.log("baluuaakj")


