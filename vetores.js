let colegas = ['hebert',
                'santana',
                'costa',
                'lima',
                'bruno'];

console.log(colegas.length);

for(let i=0;i < colegas.length;i++){
    console.log(`amigo: ${colegas[i]}`);// <- template string
}

//foreach For = para each = cada
colegas.forEach(function (valor, indice){
   console.log(`${indice}:${valor}`);
});

//map
colegas.map(function(valor, indice){

    console.log(`${indice}: ${valor}`);
});