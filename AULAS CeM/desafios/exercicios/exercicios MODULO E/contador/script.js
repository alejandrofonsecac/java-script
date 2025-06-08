function contar() {
    let n1 = document.getElementById('ini')
    let n2 = document.getElementById('ifim')
    let passo = document.getElementById('icont')
    let msg = document.getElementById('msg')

    let ini = Number(n1.value)
    let fim = Number(n2.value)
    let pas = Number(passo.value)

    if (ini === 0 || fim === 0 || pas === 0) {
        msg.innerHTML = 'Não é possível realizar isso, verifique os valores acima.'
        return
    }

    msg.innerHTML = 'Contando:<br>'

    if (ini < fim) {
        for (let i = ini; i <= fim; i += pas) {
            msg.innerHTML += `${i} 👉 `
        }
    } else {
        for (let i = ini; i >= fim; i -= pas) {
            msg.innerHTML += `${i} 👉 `
        }
    }

    msg.innerHTML += '🏁'
}