// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o
// próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...),
// escreva um programa na linguagem que desejar onde, informado um número, ele
// calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
// pertence ou não a sequência.

function fibonacci(n) {
  const lista = [0, 1];
  let t1 = 0;
  let t2 = 1;

  while (t2 <= n) {
    const proximoDaLista = t2 + t1;
    lista.push(proximoDaLista);
    t1 = t2;
    t2 = proximoDaLista;
  }

  if (lista.includes(n)) {
    console.log(`O número ${n} pertence a sequência de Fibonacci`);
  } else {
    console.log(`O número ${n} não pertence a sequência de Fibonacci`);
  }
}

// fibonacci(3);
// Basta realizar a chamada da função, passando o número ``n`` como parâmetro para descobrir
// se o número pertence a sequência de fibonacci.
