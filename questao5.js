function inverteString(string) {
  let resultado = "";
  for (let i = string.length - 1; i >= 0; i--) {
    resultado += string[i];
  }

  return resultado;
}

let stringOriginal = "Eu quero o estágio na Target";
let stringInversa = inverteString(stringOriginal);
console.log(`String Original: ${stringOriginal}`);
console.log(`String Invertida: ${stringInversa}`);
