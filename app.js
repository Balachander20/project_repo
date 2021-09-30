// function keyword
console.log(add(10,20))

function add(a=0,b=0){
  var sum=a+b
  return sum
}

// function expression
var add=function(a=0,b=0){
  var sum=a+b
  return sum
}
console.log(add(10,20))

// arrow function
var add= (a=0,b=0)=>{
  var sum=a+b
  return sum
}
console.log(add(10,20))
