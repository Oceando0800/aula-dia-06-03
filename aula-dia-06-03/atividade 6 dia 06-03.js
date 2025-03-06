let num1 = Math.floor(Math.random() * 100) + 1;
console.log(num1)

console.log("------")

let num2 = Math.floor(Math.random() * 100) + 1;
console.log(num2)

console.log("------")

let num3 = Math.floor(Math.random() * 100) + 1;
console.log(num3)

console.log("------")
if(num1 >= num2 && num1 >= num3){
    console.log("O maior número é", num1)
} else if(num2 >= num1 && num2 >= num3){
    console.log("O maior número é", num2)
} else{
    console.log("O maior número é", num3)
}