var botonEncriptar = document.querySelector(".boton_encriptar");
var botonDesencriptar = document.querySelector(".boton_desencriptar");
var imagentexto = document.querySelector(".presentacion_ima");
var contenedorParrafo = document.querySelector(".presentacion_parrafo");
var resultado = document.querySelector(".texto_resultado");
var textarea = document.querySelector('.area_texto');

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var areatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(areatexto);
    document.getElementById("resultado").style.display = "flex";
    document.getElementById("btn-copiar").style.display = "flex";
}

function desencriptar(){
    ocultarAdelante();
    var areatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(areatexto);
    document.getElementById("resultado").style.display = "flex";
    document.getElementById("btn-copiar").style.display = "flex";
}

function recuperarTexto(){
    ocultarAdelante();
    var areatexto = document.querySelector(".area_texto")
    return areatexto.value
}

function ocultarAdelante(){
    imagentexto.classList.add("ocultar");
    contenedorParrafo.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i <texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }

    return textoFinal;
}

const btnCopiar = document.querySelector(".boton_copiar");
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");    
})


textarea.addEventListener('input', function(e) {
    // Elimina cualquier carácter que no sea una letra minúscula
    this.value = this.value.replace(/[^a-z\s]/g, '');
});







