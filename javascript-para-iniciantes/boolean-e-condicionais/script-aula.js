var possuiGraducao = false
var PossuiDoutorado = false

if(possuiGraducao) {
    console.log('Possui graduação')
} else if(PossuiDoutorado) { 
    console.log('Possui doutorado')
} else {
    console.log ('Não possui graduação e doutorado')
}




var nome = 0

if(nome) {
    console.log(nome)
} else {
    console.log('Nome não existe')
}




if(!possuiGraducao) {
    console.log('Não possui graduação')
}




var x = 10

console.log(x !== 10) // sinal de diferente
console.log(x === 10) // sinal de igual




if((5 - 5) && (5 + 5)) {
    console.log('Verdadeiro')
} else {
    console.log('Falso')
}


var condicional = (5 - 15) && (5 + 5)
if(condicional) {
    console.log('Verdadeiro', condicional)
} else {
    console.log('Falso')
}




var y = (5 - 5) || (2 + -2) || ( 10 - 3)
console.log(y) 




var corFavorita = 'Preto'

switch (corFavorita) {
    case 'Branco':
        console.log('Observe as nuvens')
        break;
    case 'Amarelo':
        console.log('Pegue um sol.')
        break;
    case 'Verde':
        console.log('Faça uma trilha.')
        break;
    case 'Preto':
        console.log('Admire as estrelas.')
        break;
    case 'Azul':
        console.log('Olhe para o céu.')
        break;
    default:
        console.log('Feche os olhos.')
}