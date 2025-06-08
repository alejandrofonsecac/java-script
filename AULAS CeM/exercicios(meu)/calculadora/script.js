const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Bem-vindo à calculadora');
console.log('Você quer fazer que tipo de função?');
console.log('[1] Soma');
console.log('[2] Subtração');
console.log('[3] Multiplicação');
console.log('[4] Divisão');

rl.question('Digite o número da operação que você quer: ', (funcao) => {
    if (funcao == '1' || funcao == '2' || funcao == '3' || funcao == '4') {
        console.log('Você escolheu a opção: ' + funcao);
    } else {
        console.log('Opção inválida! Por favor, escolha 1, 2, 3 ou 4.');
    }
    rl.close();
});
