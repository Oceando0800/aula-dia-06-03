let count = 0;

while (count < 10) {
    let num = Math.floor(Math.random() * 100);
    console.log(num);

    if (num % 2 == 0) {
        console.log("Esse número é par");
    } else {
        console.log("Esse número é ímpar");
    }

    count++;
}
