function green() {
    document.querySelector('#example').classList.remove('red');
    document.querySelector('#example').classList.remove('yelow');
    document.querySelector('#example').classList.add('green');

   
}

function red() {
    document.querySelector('#example').classList.remove('green');
    document.querySelector('#example').classList.remove('yelow');
    document.querySelector('#example').classList.add('red');
   
}
function yelow() {
    document.querySelector('#example').classList.remove('red');
    document.querySelector('#example').classList.remove('yelow');
    document.querySelector('#example').classList.add('yelow');
   
}

function change(){

    if(document.querySelector('.button').classList.contains('preto')){
        document.querySelector('.button').classList.remove('preto');
        document.querySelector('.button').classList.add('verde');

    }else{
        document.querySelector('.button').classList.remove('verde');
        document.querySelector('.button').classList.add('preto');

    }

}

function changeAnimal(file, animalName) {
    document.querySelector('.imagem').setAttribute('src', `assets/${file}`);
    document.querySelector('.imagem').setAttribute(`data-animal`, animalName);

}
function getAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: "+ animal);
    
}


//Usando Slice pra pegar parte da String:
let nomeCompleto = "Matheus Hardman de Athayde";

                            //comeca da posicao, fim posicao da string
let res2 = nomeCompleto.slice(10,                15);

//começa do fim pro inicio:
let resultado = nomeCompleto.slice(-4);


console.log("slice: "+ res2);
console.log("reverso: "+ resultado);

let nome2 = "eu gosto de carros";

//substitui uma string por outra:
let res = nome2.replace('carros', 'motos');
console.log("replace: "+ res);

//tirar espaços:
let nomeTrim = "      MAtheus       ";

let resTrim = nomeTrim.trim();
console.log(`TRIM: ${resTrim}`)

//pegar letra da string:
let resLetra = nomeCompleto[2];
console.log(`LEtra: ${resLetra}`)

//pegar espaço e transformar em array:
let resSplit = nomeCompleto.split(' ');
console.log(resSplit)

//limitar qtd numeros:
let n = 10.000112;
let resNumber = n.toFixed(2);
console.log("$ "+resNumber)

//Metodos de Arrays:
let lista = ['Maca', 'Banana', 'Abacaxi'];

//separar array por:
let resListaJoin = lista.join('-');
console.log(resListaJoin)

//retornar posicao do array, se não achar retorna -1:
let resListaIndexOf = lista.indexOf('Maca');
console.log(resListaIndexOf)


let lista_aux = ['Maca', 'Banana', 'Abacaxi'];
let lista_aux2 = ['Maca', 'Banana', 'Abacaxi'];

//Remove ultima posicao do array:
lista_aux.pop();
let resListaPop = lista_aux;
console.log(resListaPop)

//Remove primeira pos do array:
lista_aux2.shift();
let resListaShift = lista_aux2;
console.log(resListaShift)

//Add fim do array:
lista_aux2.push('melao');
let resListaPush = lista_aux2;
console.log(resListaPush)

//Remover do array:
let listaRemove = ['Maca', 'Banana', 'Abacaxi'];

//                pos do array, qtd de remocoes    
listaRemove.splice(  1,          2);
let resListaRemove = listaRemove;
console.log("Removidos")
console.log(resListaRemove)

//junçao de dois arrays:

let listaContat = ['Uva', 'MElao', 'Abacaxi'];
let listaContat2 = ['Cereja', 'Banaca'];

let resListaConcat = listaContat.concat(listaContat2);
console.log("Concat")
console.log(resListaConcat)


//Ordenar array:

let listaSort = ['Uva', 'MElao', 'Abacaxi'];

let resListaSort = listaSort.sort();
console.log("Ordenado: ")
console.log(resListaSort)

resListaSort = resListaSort.reverse();
console.log("Desordenado: ")
console.log(resListaSort)

//Usando Map:
let arrayMap = [1, 5, 10, 50];

let arrayMap2 = arrayMap.map(function(item) {
   return item * 2; 
});

console.log("ArrayMap: ")
console.log(arrayMap2)

//Usando Filter:
let arrayFilter = [1, 5, 10, 50];

let arrayResFilter = arrayMap.filter( function(item) { return item >= 10});

console.log("Array Filter: ")
console.log(arrayResFilter)

//Usando Every, todos tem q dar vedadeiro:
let arrayEvery = [1, 5, 10, 50];

let arrayResEvery = arrayEvery.every( function(item) { return item >= 10});

console.log("Resposta Array Every: ")
console.log(arrayResEvery)

//Usando Find, get item:
let arrayFind = [1, 5, 10, 50, 10];
let arrayFindObject = [{id: 1, nome: "MAtheus"}, {id: 2, nome: "Lolo"},{id: 3, nome: "Burumungu"}]

let arrayResFind = arrayFind.find( function(item) { return (item == 10)? true : false; });
let arrayResFindObject = arrayFindObject.find( function(item) { return (item.id == 3)? true : false; });


console.log("Resposta Find: ")
console.log(arrayResFind)

let arrayFindIndex = arrayFilter.findIndex(function(item) { return (item == 10) ? true : false; });
console.log("Resposta Find Index: ")
console.log(arrayFindIndex)

console.log("Resposta Find Object: ")
console.log(arrayResFindObject)


/************TRABALHANDO COM DATAS************/

let data = new Date();

//Extraindo dados da data:
let dia =  data.getDate();
//Mes começa do zero,por isso mes é: (mes + 1)
let mes =  data.getMonth();
let ano =  data.getFullYear();

let hora = data.getHours();
let min = data.getMinutes();
let segundos = data.getSeconds();

let timestamp = data.getTime();

let dateNow = Date.now();

console.log("dia + mes + ano");
console.log(dia +"/" + (mes + 1) +"/"+ ano + " " + hora + ":" + min +":"+segundos);

console.log("timestamp: ");
console.log(timestamp);

console.log("data atual: ");
console.log(dateNow);

let aux = new Date();

aux.setDate(aux.getDate() + 10);
dataAcres = aux;

console.log("data com acrescimo de dias: ");
console.log(dataAcres);


















