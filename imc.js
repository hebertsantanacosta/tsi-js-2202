let peso = prompt("qual é seu peso");
let altura =prompt('qual é sua altura?');

function calcularImc( peso, altura){

    let imc = peso/(altura^2);

    let retorno = '';

    if(imc > ){
        retorno = 'acima do peso';
    }else if(imc >= 18 && imc <= 25){
        retorno = 'peso ideal';
    }else{
        retorno = 'abaixo do peso';
    }
    return 
}