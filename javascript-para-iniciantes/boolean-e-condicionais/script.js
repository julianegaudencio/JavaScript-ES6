// Verifique se a sua idade é maior do que a de algum parente
var minhaIdade = 21
var idadeParente = 21

if(minhaIdade > idadeParente) {
    console.log('Você é mais velho que seu parente.')
} else if(minhaIdade === idadeParente) {
    console.log('Vocês tem a mesma idade.')
} else {
    console.log('Seu parente é mais velho que você.')
}




// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao)




// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)




// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china) {
    console.log('Brasil tem mais habitantes.')
} else {
    console.log('Brasil tem menos habitantes.')
}




// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
console.log('Verdadeiro');
} else {
console.log('Falso');
}


// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
console.log('Gato' && 'Cão');
} else {
console.log('Falso');
}