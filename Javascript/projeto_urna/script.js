let seuVoto = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');


let etapaAtual = 0;
let numero = '';


function initEtapa(){

    let etapa = etapas[etapaAtual];
    let numeroHtml = '';

    for(let i=0; i < etapa.numeros; i++){
        if(i === 0){
            numeroHtml += '<div class="numero pisca"></div>';
        }else{
            numeroHtml += '<div class="numero"></div>';
        }
    }
    seuVoto.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;

}

function apertou(params) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero !== null){
        elNumero.innerHTML = params;
        numero = `${numero}${params}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizaInterface();
        }
    }
}
function branco(){
    console.log("Branco");
}
function corrigir(){
    console.log("corrigir");
}
function confirmar(){

    console.log(etapas);

}

function atualizaInterface(){

    let etapa = etapas[etapaAtual];
    let candidado = etapa.candidatos.filter((item)=>{

        if(item.numero === parseInt(numero)){
            return true;
        }else{
            return false;
        }
    }); 
    if(candidado.length > 0){
        candidado = candidado[0];
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = `Nome: ${candidado.nome}<br/>PArtido: ${candidado.partido}`;
    
        let fotosHtml = '';
        
        for(let i in candidado.fotos){
            fotosHtml += 
                        `<div class="d-1-image">
                            <img src="images/${candidado.fotos[i].url}"/>
                            ${candidado.fotos[i].legenda}
                        </div>`
        }
        lateral.innerHTML = fotosHtml;
    }else{
        seuVoto.style.display = 'block';
        aviso.style.display = 'block';
        descricao.innerHTML = '<div class="aviso--grande pisca">Voto Nulo</div>'
    }
    console.log(candidado);
}

initEtapa();