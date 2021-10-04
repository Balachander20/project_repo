let car ={
  name:"balu",
  manufacter:"abhi",
  print:()=>  {
    console.log(`${this.name}${this.manufacter}`)
  
  }
}
console.log(car)
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(car.hasOwnProperty("yr "))
