function encriptar() {
    let textoUsuario =  document.getElementById("texto__usuario").value;
    let tituloCuadroSalida = document.getElementById("titulo__cuadro__salida");
    let parrafoCuadroSalida = document.getElementById("parrafo__cuadro__salida");
    let ilustracion = document.getElementById("ilustracion");
    let copiar = document.getElementById("copiar")

    let textoCifrado = textoUsuario
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat")

 if (document.getElementById("texto__usuario").value.length != 0) {
    document.getElementById("texto__usuario").value = textoCifrado;
    tituloCuadroSalida.textContent = "Texto encriptado con éxito";
    parrafoCuadroSalida.textContent = "";
    ilustracion.src = "./imagen/encriptado.jpg";
    copiar = document.getElementById("copiar").style.display = "show";
    copiar = document.getElementById("copiar").style.display = "inherit";
 } else {
    ilustracion.src = "./imagen/ilustracion.png";
    tituloCuadroSalida.textContent = "Ningún mensaje fue encontrado"
    parrafoCuadroSalida.textContent = "Ingresa el texto que desees encriptar o desencriptar"
    alert("Debes ingresar algún texto");
 }

}

function desencriptar() {
    let textoUsuario =  document.getElementById("texto__usuario").value;
    let tituloCuadroSalida = document.getElementById("titulo__cuadro__salida");
    let parrafoCuadroSalida = document.getElementById("parrafo__cuadro__salida");
    let ilustracion = document.getElementById("ilustracion");
    let copiar = document.getElementById("copiar")

    let textoCifrado = textoUsuario
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")

    if (document.getElementById("texto__usuario").value.length != 0) {
        document.getElementById("texto__usuario").value = textoCifrado;
        tituloCuadroSalida.textContent = "Texto desencriptado con éxito";
        parrafoCuadroSalida.textContent = "";
        ilustracion.src = "./imagen/encriptado.jpg";
        copiar = document.getElementById("copiar").style.display = "show";
        copiar = document.getElementById("copiar").style.display = "inherit";
     } else {
        ilustracion.src = "./imagen/ilustracion.png";
        tituloCuadroSalida.textContent = "Ningún mensaje fue encontrado"
        parrafoCuadroSalida.textContent = "Ingresa el texto que desees encriptar o desencriptar"
        alert("Debes ingresar algún texto");
    }
}

function copy() {
    let contenido = document.getElementById("texto__usuario");
    contenido.select();
    contenido.setSelectionRange(0,99999)
    navigator.clipboard.writeText(contenido.value)
    alert("Se copio")
}