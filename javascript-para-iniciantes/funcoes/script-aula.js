function areaQuadrado(lado) {
    return lado * lado
}

console.log(areaQuadrado(2))





function pi() {
    return 3.14
}

var total = 5 * pi() // 15.7
console.log(pi())





function imc(peso, altura) {
    var imc = peso / (altura * altura)
    return imc
}

console.log(imc(80, 1.8))





function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Céu'
    } else if(cor === 'preto') {
       return 'Estrelas'
    } else {
        return 'Nada'
    }
    
}




addEventListener('click', function(){ 
    console.log("Oi") 
}) 


function mostraConsole(){
    console.log('Oi')
}

addEventListener('click', mostraConsole)  





function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}

imc2(20, 1.8) // retorna o imc
console.log(imc2(80, 1.80)) 





function maiorIdade(idade){
    console.log(typeof idade)
    if(typeof idade !== 'number') {
        return 'Por favor, coloque uma idade'
    } else if(idade >= 18) {
        return true
    } else {
        return false
    }
}

console.log(maiorIdade('oi'))





function livrosLidos(precisoLer) {
    var metaLivros = 30
    return `Preciso ler ${metaLivros - precisoLer} livros.`
} 