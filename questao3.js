// 3) Descubra a lógica e complete o próximo elemento:
// a) 1, 3, 5, 7, ___

function letraA(numero) {
  return numero + 2;
}

console.log(`O quinto número da lista é ${letraA(7)}`);

// b) 2, 4, 8, 16, 32, 64, ____

function letraB(numeroAnterior) {
  return numeroAnterior * 2;
}
console.log(`O sétimo número da lista é: ${letraB(64)}`);

// c) 0, 1, 4, 9, 16, 25, 36, ____

function letraC(numero) {
  return numero * numero;
}

console.log(`O oitavo número da lista é: ${letraC(7)} `);

// d) 4, 16, 36, 64, ____

function letraD(numero) {
  return numero * numero;
}
console.log(`O 5 número par, terá um valor de: ${letraD(10)}`);

// e) 1, 1, 2, 3, 5, 8, ____

const lista = [1, 1, 2, 3, 5, 8];
function letraE() {
  let penultimoNumero = 5;
  let ultimoNumero = 8;

  return penultimoNumero + ultimoNumero;
}

console.log(
  `O próximo número é o produto da soma dos dois últimos itens da lista: ${letraE()}`
);
