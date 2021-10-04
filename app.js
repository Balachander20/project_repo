let car ={
  name:"balu",
  manufacter:"abhi",
  print:function()  {
    let manufacter="bmw"
    console.log( manufacter)
    console.log(this)
    console.log(`${this.name} was created by ${this.manufacter}`)
   
  }
}

console.log(car)
console.log(typeof(car))
console.log(car.name)
console.log(car.manufacter)

car.print()

