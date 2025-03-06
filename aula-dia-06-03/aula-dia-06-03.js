let num1 = 20
let num2 = 90
let str1 = "34"
let str2 = "87"
let str1ParaNum = parseInt(str1);
let num2ParaStr = num2.toString();

console.log("-----")
console.log(num1 + num2);
console.log("-----")
console.log(str1 + str2);
console.log("-----")
console.log(num1 + str1ParaNum);
console.log("-----")
console.log(num2ParaStr + str2);

console.log("----------------------------------------------")

let numeroSurpresa = 10
for(let i=0;i<5;i++){
    console.log(numeroSurpresa);
    numeroSurpresa = numeroSurpresa + 10
}

console.log("----------------------------------------------")

let contagem = 10
while(contagem>= 0){
    console.log("CONTAGEM REGRESSIVA: " + contagem)
    contagem -= 1;
}
console.log("BUUUUUUUUUMMMMMMMMMMM!");

console.log("----------------------------------------------")

for(let i=0;i<11;i++){
    console.log("CONTAGEM PROGRESSIVA: " + i);
}