/* let num = [5, 8, 4] 
    Criando uma array
*/

/*
num[3] = 6  
Está criando um 4 elemento que vale 6 
*/

/*  num.push(7) 
 Está criando um quinto elemento (O elemento vai ser criado então se tiver 4 elementos ele vai criar o quinto, se tiver 7 elementos ele vai criar o oitavo) vale 7 */

/* num.length  
   Para saber o comprimento da array 
   de acordo com as os elementos que fizemos acima a array tem
   5 elementos.
*/

/* num.short() 
Vai pegar todos os elementos e colocar em ordem 
crescente 
*/

 
let num = [5, 8, 2, 9 ,3]
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro no valor é ${num[0]}`)