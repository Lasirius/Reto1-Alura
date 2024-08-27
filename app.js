const texto=document.getElementById('mensaje');
const botonEncriptar= document.getElementById('encriptarB');
const botonDesencriptar= document.getElementById('desencriptarB');
const botonCopiar= document.getElementById('copiarB');
const resultado =document.getElementById('codigo')

const salida=(salida) => {
    resultado.innerHTML=salida;
    document.getElementById("informacionConTexto").style.display="flex";
    document.getElementById("informacionSinTexto").style.display="none";
}

const reset=() => {
    texto.value="";
    document.getElementById("informacionConTexto").style.display="none";
    document.getElementById("informacionSinTexto").style.display="flex";
    resultado.value="";
}

let llaves = [
    ["e", "enter"],
    ["i", "imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

botonEncriptar.addEventListener('click', ()=> {
    const texte = texto.value;
    if(!/[^a-z\s]/.test(texte) && texte != ""){
        function encriptar(entrada){
            for(let i=0; i < llaves.length; i++){
                if(entrada.includes(llaves[i][0])){
                    entrada=entrada.replaceAll(llaves[i][0], llaves[i][1]);
                };   
            };
            return entrada;
        };
        salida(encriptar(texte));
    }
    else{
        alert("el texto no cumple los requisitos");
        reset();
    };
});

botonDesencriptar.addEventListener('click', ()=> {
    const text = texto.value;
    if(!/[^a-z\s]/.test(text) && text != ""){
        function desencriptar(entrada){
            for(let i=0; i < llaves.length; i++){
                if(entrada.includes(llaves[i][1])){
                    entrada=entrada.replaceAll(llaves[i][1], llaves[i][0]);
                };   
            };
            return entrada;
        };
        salida(desencriptar(text));
    }
    else{
        alert("el texto no cumple los requisitos");
        reset();
    };
});

botonCopiar.addEventListener('click', ()=> {
   const respuesta=resultado.innerText;
   navigator.clipboard.writeText(respuesta);
});
