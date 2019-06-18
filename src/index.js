
// DECLARAR OCULTAR Y MOSTRAR

const ocultar = (id) => {
  document.getElementById(id).classList.add("oculto"); 
}

const mostrar = (id) => {
  document.getElementById(id).classList.remove("oculto");
}


// ¿CÓMO JUGAR?

const howToPlay = document.getElementById("how-to-play");
 
const openInstructions = () => {
  ocultar ("bienvenida");
  mostrar ("instrucciones");

}

howToPlay.addEventListener('click', openInstructions);


// COMENZAR

const start = document.getElementById("inicio");

const openGame = () => {
  ocultar ("instrucciones");
  mostrar ("comenzar");
}

start.addEventListener('click', openGame);

// BOTÓN DUDAS

const helpButton = document.getElementById('preguntas');
const close = document.getElementById('cerrar');

//ABRIR

const openHelp = () => {
  mostrar('dudas');
}

helpButton.addEventListener('click', openHelp);

//CERRAR

const closeHelp = () => {
  ocultar('dudas');
}

close.addEventListener('click', closeHelp);


////////////////////////////////////////////////////////////////////////////



// OFFSET (SAVE)

const codeButton = document.getElementById('cifrar'); // Boton para cifrado
let offset = document.getElementById('offset'); // Offset 
let msjToCodeDecode = document.getElementById('code-decode'); // Donde se escribira el mensaje SIN cifrar o descifrar


// IMPRIMIR MENSAJE CODIFICADO

const newMessageCode = () => { //Arrow function para imprimir un nuevo mensaje (cifrado)
  const blankSpaceCode = document.getElementById('frase-secreta'); //Donde se mostrara el mensaje YA cifrado
  let offsetCode = parseInt(offset.value); // parseInt convierte los strings en number. Convierte el valor ingresado en el offset a un valor numérico.
  let msjCoded = cipher.encode(offsetCode, msjToCodeDecode.value); // Toma la función cipher.encode de cipher.js y asigna los parametros del offset y el valor del mensaje a codificar
  blankSpaceCode.innerHTML = msjCoded; //imprime en el textarea el valor del mensaje codificado
}


codeButton.addEventListener('click', newMessageCode) //Ejecuta la función newMessageCode




//CIPHER DECODE

// OFFSET (SAVE)

const decodeButton = document.getElementById('descifrar'); // Botón para descifrar
//No es necesario volver a llamar el offset ni el area donde se pondra el mensaje SIN cifrar o descifrar 

// IMPRIMIR MENSAJE DECODIFICADO

const newMessageDecode = () => { // //Arrow function para imprimir un nuevo mensaje (descifrado)
  const blankSpaceDecode = document.getElementById('frase-secreta'); //Donde se mostrara el mensaje YA descifrado 
  let offsetDecode = parseInt(offset.value);
  let msjDecoded = cipher.decode(offsetDecode, msjToCodeDecode.value); // Toma la función cipher.decode de cipher.js y asigna los parametros del offset y el valor del mensaje a decodificar
  blankSpaceDecode.innerHTML = msjDecoded; // imprime en el textarea el valor del mensaje DECODIFICADO

}

decodeButton.addEventListener('click', newMessageDecode); //Ejecuta la función newMessageDecode



// BOTON LIMPIAR

const cleanButton = document.getElementById('limpiar');

const cleanTextarea = () => {
  document.getElementById('formulario').reset();
  let blankSpace = document.getElementById('frase-secreta');
  blankSpace.innerHTML = '';
}
  

cleanButton.addEventListener('click', cleanTextarea);

