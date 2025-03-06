let num = Math.floor(Math.random() * 100) + 1;
console.log(num)

console.log("-----------------------------")

console.log("Tabuada do", num);

let multiplicador = 1

while(multiplicador<= 10){
    let resultado = num * multiplicador
    console.log(num + " x " + multiplicador + " = " + resultado)
    multiplicador = multiplicador + 1
}