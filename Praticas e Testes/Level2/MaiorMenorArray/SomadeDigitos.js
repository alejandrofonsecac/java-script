let n = 534;
let nDigitos = n.toString().split('');

let n1 = Number(nDigitos[0]);
let n2 = Number(nDigitos[1]);
let n3 = Number(nDigitos[2]);

let soma = n1 + n2 + n3;

console.log("Número:", n);
console.log("Dígitos:", nDigitos);
console.log("Soma dos dígitos:", soma);