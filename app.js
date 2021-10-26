const b=document.querySelector("button")
const i=document.querySelector("input")
const d=document.querySelector("div")
const a=[1,2,3,4,5]
localStorage.setItem("val",JSON.stringify(a))
console.log(JSON.parse(localStorage.getItem("val")))
