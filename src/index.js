
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



































// const boxPrint = document.getElementById('saludo');
  // const printName  = () => {
  //   boxPrint.innerHTML = 'Hola' + ' ' + getName.value;
  // }
  
  // getName.addEventListener('keyup', printName)
  

// document.getElementById("dudas").style.visibility ="visible";