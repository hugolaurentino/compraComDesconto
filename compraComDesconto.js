const compra = [100, 500, 50]

let menor = compra[0]
let valorNovo = 0
if (compra.length >= 5) {
    for (const valor of compra) {
        if (valor < menor) {
            menor = valor;
        }
        valorNovo += valor
    }
    console.log(valorNovo - menor);

} else {

    for (const novo of compra) {

        valorNovo += novo

    }

    console.log(valorNovo);
}
