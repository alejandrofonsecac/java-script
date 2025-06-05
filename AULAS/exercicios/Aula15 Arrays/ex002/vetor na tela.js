let valores = [8, 1, 7, 4, 2, 9]

 
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor de ${valores[pos]}`)
}
    

console.log('Irei mostrar de outra forma agora...')

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*  num.indexOf(7)
Ele vai pesquisar dentro da array (num) e tentar encontrar o valor 7. Com isso ele ira voltar o valor da POSIÇÃO desse elemento
*/