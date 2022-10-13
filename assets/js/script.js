const inputTexto = document.querySelector(".input-texto")
const mensaje = document.querySelector(".mensaje")

//Empiezo ocultando el text-area donde se muestrara el mensaje Cifrado/Descifrado
    //document.querySelector(".mensaje").style.display = 'none';
    document.getElementById('mensaje').style.display = 'none';
//Empiezo ocultando el boton Copiar
    document.getElementById('copiar').style.display = 'none';

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnCifrar(){
    const textoCifrado = cifrar(inputTexto.value)
    mensaje.value = textoCifrado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
    
    //Ocultando texto que al apretar "Cifrar"--> desaparece
        document.getElementById('text-out').style.display = 'none';
    //Ocultando imagen tambien despues de apretar "Cifrar"
        document.getElementById('munieco').style.display = 'none';
    //Permito visualizar el text-area del mensaje Cifrado/Descifrado
        document.getElementById('mensaje').style.display = 'inline';
    //Permito visualizar el Boton Copiar
        document.getElementById('copiar').style.display = 'inline-block';
}

function cifrar(stringCifrado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Pasar todo a minusculas 
    stringCifrado = stringCifrado.toLowerCase();

    for (let index = 0; index < matrizCodigo.length; index++) {
        if(stringCifrado.includes(matrizCodigo[index][0])){
            stringCifrado = stringCifrado.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1])
        }              
    }
    return stringCifrado;
}

function btnDescifrar() {
    const textoCifrado = descifrar(inputTexto.value)
    mensaje.value = textoCifrado
    inputTexto.value = ""
}

function descifrar(stringDescifrado) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    //Pasar todo a minusculas 
    stringDescifrado = stringDescifrado.toLowerCase();

    //Ya no busco en la posicion [0] sino en la [1] por motivo de que en matriz codigo ahora se descifra
    for (let index = 0; index < matrizCodigo.length; index++) {
        if(stringDescifrado.includes(matrizCodigo[index][1])){
            stringDescifrado = stringDescifrado.replaceAll(matrizCodigo[index][1], matrizCodigo[index][0])
        }           
    }
    return stringDescifrado;
}

function copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""

    alert("Texto Copiado")
} 



