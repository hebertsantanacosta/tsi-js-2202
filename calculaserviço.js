/*criar calculadora e valor a ser cobrado do cliente
O valor do serviço pode variar conforme
prazo.
Os valores e prazos devem ser armezenado
em matriz.
O calculo deve ficar obrigatoriamente em uma função
*/

let tabela = [ ['$$$','$$','$'],
               ['$$$$','$$$',],
               ['--','--','$$$']];

let servico = prompt("entre com o serviço: (0 - troca de óleo, /n0 - troca de óleo \n1 - balanceamento \n 2 - cambagem");
let prazo = prompt("entre com o prazo: (\n0 - um dia, \n1 - dois dias \ n2 - tres dias");

if( validaEntrada(servico)&& validaEntrada(prazo)){
    alert("O SERVIÇO FICARA EM: ");
}else{
    alert("ERRO: verifique os valores inseridos e novamento ");
}

function validaEntrada(dadoUsuario){
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}