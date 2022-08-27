//ESTRUTURA DE REPETIÇÃO

//loopings

for(i = 0; i < 10; i++){
    console.log('Número' +  i)
}

//while

i = 0;

while(i < 10){
    console.log('Número da linha' + i);
    i++;
}

//do 

i = 20;

do{
    console.log('Número da linha com do:' + 5);
    i++;
}while(i < 10);

//condicionais

//if

let a = 5;
let b = 5;
if(a < b){
    console.log(a + 'é menor que' + b);
}else if(a == b ){
    console.log(' é igual a ' + b);
}else{
    console.log(' não é menor que' + b);
}

//switch

switch(diaSemana){

    case 0:
        console.log('domingo');
        break;
    case 1:
        console.log('lunes');
        break;  
    case 2:
        console.log('martes');
        break;        
    case 3:
        console.log('miercules');
        break;  
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    case 6:
        console.log('sabado');
        break;    
    default:
        console.log('numero inválido')

}

//terminário
let x = 4;
let y = 2;

let resultado = x > y ? 'x é maior ' : 'não é maior';

console.log(resultado);

let genero = prompt('entre com M ou F');

let saida = genero == 'M' ? 'Masculino' : "Feminino";

console.log(saida);

//coalescente

let coisa = 10;
let variavel = coisa ?? 'não há';
console.log(variavel);