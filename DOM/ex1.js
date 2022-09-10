console.log(window);
// como UTILIZAR ATRIBUTOS DE UM OBJETO
// window.alert(´sua resolução é: $window.innerHeigth) x 

let meuTitulo = document.getElementById('titulo');

meuTitulo.innerText = 'Mudou';

meuTitulo.style.backgroud = 'purple';

//let nav = window.navigator.userAgent;
//alert(nav);

if(confirm('deixe uma mensagem')){
    let msg = prompt('mensagem');
    meuTitulo.innerText  = msg;
    meuTitulo.style.background = 'green';
}else{
    meuTitulo.innerText = 'sem mensagem';
    meuTitulo.style.background = 'purple';
}

console.log(window.navigator);

