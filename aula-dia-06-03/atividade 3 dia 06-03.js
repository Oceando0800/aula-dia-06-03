let nome = "Lucas"
let notaLucas = Math.floor(Math.random() * 10) + 1;
console.log(notaLucas)
if (notaLucas<= 6){
    console.log(nome, "Você teve um baixo desempenho, mas sabemos que pode melhorar!")
}
if(notaLucas>= 7 && notaLucas <= 8){
    console.log(nome, "Parabéns pelo bom desempenho" )
}
if(notaLucas >= 9 && notaLucas <= 10){
    console.log(nome, "Parabéns pelo excelente desempenho!!!!!")
}