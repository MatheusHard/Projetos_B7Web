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

/************DESTRUCT************/

let pessoa = {
    id: 1,
    nome: "Matheus",
    sobreNome: "Hardman",
    age: 39,
    profissao:{
        id: 1,
        descricao: "Tecnico em Desenvolvimento de Sistemas"
    }
}
                       //iniciazar, se for vazio:
let { nome, sobreNome, age = 0,                  profissao } = pessoa;
console.log("Pessoa Destruct")
console.log(`NOme: ${nome}, Idade: ${age}, Profissao: ${JSON.stringify(profissao)}`);


/*******ARROWS functions*******/

const somar = (a, b) => {return a + b}

const somarResumida = (a, b) => a + b;

console.log("Arrow Function")
console.log(somar(10,50));

console.log("Arrow Function resumida")
console.log(somarResumida(10,50));

/*******SPREAD*******/

let arraySpread = [1, 6, 5]

let newArraySpread = [...arraySpread, 7, 9, 45]
console.log("Spread Array: ")
console.log(newArraySpread);

let objSpread = {
    id: 1,
    nome: "RAbuju",
    age: 80
}
let newObjSpread =  {
    ...objSpread,
    sobreNome: "Athayde",
    funcao: "dev"
}
console.log("Spread Objeto: ")
console.log(newObjSpread);

/*****REST*****/

function funcaoRest(...params) {
    console.log("REST, varias variavies")
    console.log(params);
} 

funcaoRest(1,7, 9);

/*****INCLUDE*****/

let arrayInclude = ['maca', 'ovo', 'manteiga'];
//true or false:
console.log(arrayInclude.includes('ovo'));
let frase = "corretor";
console.log(frase.includes('o'));


/******REPEAT******/

console.log(frase.repeat(10))

/******KEYS, ENTRIES, VALUES******/

let arrayKey = ['maca', 'ovo', 'manteiga'];

console.log("KEYS")
console.log(Object.keys(arrayKey))
console.log("VALUES")
console.log(Object.values(arrayKey))
console.log("ENTRIES")
console.log(Object.entries(arrayKey))


/******PADSTART e PADEND******/

let cartao = "2025158756789809"
let lastDigits = cartao.slice(-4);
let lastDigits2 = cartao.slice(0, 4);

let cartaoMasc = lastDigits.padStart(16, '*')
let cartaoMasc2 = lastDigits2.padEnd(16, '*')


console.log("Seu cartao é: "+cartaoMasc)
console.log("Seu cartao é: "+cartaoMasc2)

/*****JSON POST******/

let p = JSON.parse('{"nome":"MAtheus", "age": 39}')
console.log("Json To Object")
console.log(p)

let objetoJson = {
    id: 1,
    nome: "Matheus",
    age: 80
}
console.log("Object To Json")
console.log(JSON.stringify(objetoJson));

function loadPost(){
    console.log("LOADING...")
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(res){
        return res.json();
    }).then(function (json) {
        montarPosts(json)
    })
    .catch(function(error){
        console.log("Deu B.O.: "+error)
    })
}
/*****JSON POST ASYNC******/


async function loadPostAsync(){
    console.log("LOADING...")
    let req = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await req.json();
    montarPosts(json);
}



function montarPosts(json){
let html = '';

for(let i in json){
    html += '<h3>'+json[i].title+'</h3>';
    html +=  json[i].body+'<br/>';
    html += '<hr/>';
}
document.getElementById("posts").innerHTML = html;
}

async function sendPostAsync(){
    document.getElementById("post").innerHTML = "Sending...";
    let req = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'Hoem',
            body: 'Body',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json'
        }
    });
    let json = await req.json();

    console.log(json);

}

async function sendImages(){
    let arquivo = document.getElementById('arquivo').files[0];
    console.log(arquivo)

    let body = new FormData();
    body.append('title', 'TESTES TITLE');
    body.append('arquivo', arquivo);

    let req = await fetch('https://www.site.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}

function mostrarFoto(){

    let imagem = document.getElementById('arquivo').files[0];
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);
} 

function mostrarFotoReader(){

    let reader = new FileReader();

    let imagem = document.getElementById('arquivo').files[0];
    
    reader.onloadend = function(){ 
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);
    }
    reader.readAsDataURL(imagem);
} 
//Ornedar Objetos

var pessoas = [
    {
      nome: "Matheus",
    idade: 29
  },
  {
      nome: "Pedro",
    idade: 18
  },
  {
      nome: "Maria",
    idade: 40
  },
  {
      nome: "Alan",
    idade: 63
  }
];
pessoas.sort((a, b) => {
  return a.idade - b.idade;
});
//Idade:
console.log("ORDER BY IDADE");
console.log(pessoas);

pessoas.sort((a, b) => {
    if(a.nome < b.nome) {
        return -1;
      } else {
        return true;
      }
      });

  console.log("ORDER BY Nome");
  console.log(pessoas);
  















