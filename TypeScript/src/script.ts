
//Inferencia literal:
function getApi(url: string, method: 'GET' | 'POST') {
    
}

type RequestDetails = {
     url: "https://google.com.br";
     method: 'GET' | 'POST'; 
    
}

let req :  RequestDetails = {
    url: "https://google.com.br",
    method: 'GET' 
   
};

getApi(req.url, req.method);

//Type para funcoes

type MathFunction = (n1: number, n2: number) => number;

const somar: MathFunction = (n1, n2) => {
    return n1+n2
} 
const subtrair: MathFunction = (n1, n2) => {
    return n1-n2
} 

somar(4, 6);

/*WatchNMode: tsc src/script.ts -w (mudanças igual LiveServe)

Criar o arquivo tsconfig.json: tsc --init
 no arquivo tsconfig.json:

"include":[
   "src/scpist.ts"
]
"exclude":[
    "node_modules"
]

versão do jasvascript:
 "target": "es5"

 //Add bibliotecas de suporte:
 "lib": [

    "DOM",
    "ES5",
    "DOM.Iterable",
    "ScriptHost"
 ]

 direcionar o arquivo .js ao digitar tsc pra criar o scrip.js:

 "autDir": "./public/assets/js"

 incluir pasta:

 "rootDir": "./src"

 remover comentarios:
 
 "removeComments": true"

 Não vai gerar os arquivos:
 noEmit:"true"

 //não vai criar nada, caso tenha error(critico):

 "noEmitOnError": true

 Aparecer waning, variaveis não usadas:
 "noUnusedLocals": true

 paramentros não usados na funcao:
 "noUnusedPArameters": true

 sem retorn implicito:
 ex: if(12 > 0 ) return
 
 "noImplicitReturns": true
 */