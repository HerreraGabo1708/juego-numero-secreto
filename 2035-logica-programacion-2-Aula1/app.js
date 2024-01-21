let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados= [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   if(numeroDeUsuario===numeroSecreto){
    asignarTextoElemento('p',`Acertaste el Numero! en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
   }
   else{
    //Usuario no acierta

        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor!')
        }
        else{
            asignarTextoElemento('p','El numero secreto es mayor!')
        }
        intentos++;
        limpiarCaja();
   }
    return;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento(`p`,`Ya se sortearon todos los numeros`);
    }else{

    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
   
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del NumeroSecreto!')
    asignarTextoElemento('p',`Selecciona un Numero del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
   document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();
