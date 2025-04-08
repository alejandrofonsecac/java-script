onload = function(){

    function somar(){
        var tn1 = document.getElementById('txtn1')
        var tn2 = document.getElementById('txtn2')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var soma
        
        var soma = n1 + n2

        res.innerText = `A soma entre ${soma}`
    }
}