let pessoas = [
    { nome: 'Ana', idade: 20 },
    { nome: 'Jorge', idade: 19 },
    { nome: 'João', idade: 25 }
]

function filtrarPessoasporIdade(pessoas){
    if(pessoas.idade >= 22){
        console.log(`${pessoas.nome}, tem mais de 22 anos.`)
    }else{ 
        console.log(`${pessoas.nome}, tem menos de 22 anos.`)
    }
}

pessoas.forEach(filtrarPessoasporIdade)