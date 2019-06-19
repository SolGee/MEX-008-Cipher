## Introducción

La idea del proyecto busca aplicar el [cifrado Cesar](https://en.wikipedia.org/wiki/Caesar_cipher) en un Rally de integración. En un principio se pensó para empresas privadas donde se emplearía por parte del departamento de Recursos Humanos para una manera más dinámica de realizar los ejercicios para integración del personal, sin embargo con el fin de hacer más atractivo el ejercicio se optó por aplicar la idea del Rally a un hotel, donde los participantes serían los huéspedes vigentes y el incentivo para el ganador sería una noche extra todo pagado en el hotel.

## ¿Cómo es la dinámica?
1. Al rededor del hotel hay 5 palabras cifradas.
2. Las 5 palabras conforman una frase secreta.
3. Cada mensaje se compone de lo siguiente:
![Componentes-del-mensaje](https://github.com/SolGee/MEX-008-Cipher/blob/master/src/how-to.png)
4. Tu misión es recorrer el hotel, encontrar los mensajes y ser el primero en descifrar cada una de las palabras para armar la frase secreta.
5. Una vez descifrado el mensaje deberás llamar a recepción para verificar si fuiste el primero en lograrlo.

### ¿¿Fuiste el ganador? ¡Felicidades!
#### Pero aún queda un paso más.

Para que otros huéspedes tengan la misma oportunidad que tú, serás el encargado de armar la nueva frase secreta y cifrarla.

No te preocupes, en esta misma app podrás cifrar tu frase.

Te recomendamos que uses un número diferente de cifrado por cada palabra que tenga tu frase para que sea un mayor reto para los futuros participantes.

### NO OLVIDES DEJAR EN RECEPCIÓN:
1. TU NUEVA FRASE (_SIN CIFRAR_)
2. EL O LOS NÚMEROS PARA CIFRAR TU FRASE.
3. TU NUEVA FRASE CIFRADA.

## ¿Cómo funciona?
El cifrado y descifrado de mensajes se basa en el sistema de cifrado César. Utiliza el cifrado por sustitución (_se elige un número de desplazamiento para reemplazar el texto original por uno cifrado_).

### Para descifrar:
* Llena los campos como se muestra a continuación y da clic en el botón descifrar.
![Descifrar](https://github.com/SolGee/MEX-008-Cipher/blob/master/src/descifrar.png)

### Para cifrar:
* Llena los campos como se muestra a continuación y da clic en el botón cifrar.
![Cifrar](https://github.com/SolGee/MEX-008-Cipher/blob/master/src/cifrar.png)



## Principales usuarios

El usuario general son los huespedes del hotel. Dentro de este grupo, nos enfocamos en huéspedes mayores de edad (especialmente adultos jovenes) que les gusten los retos y esten dispuestos a dedicar una fracción de su tiempo en seguir los pasos del Rally.

## Objetivos de estos usuarios en relación con tu producto.

* Implementar actividades de integración más dinámicas.
* Generar preferencia para hospedajes futuros.
* Mejorar su presencia en redes a través de la difusión del Rally.

## ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?


## Instalación

### Requisitos

* Tener instalada una UNIX Shell
* Tener instalado Git Bash (_Recomendado_)
* Tener instalado node.js
* 
 
### Descarga

* Haz tu propio fork de este repositorio.
* Clona tu fork a tu computadora.
* 

### Ejecución







¿Cómo funciona?
The Snitch utiliza el cifrado César, conocido por ser uno de los primeros sistemas de cifrado, utilizando el abecedario y cifrado por sustitución. Es decir, se elige un número de desplazamiento por el cual se sustituirá la letra original con la letra con desplazamiento.

Por ejemplo: HOLA, con un desplazamiento de 1, tendría como resultado IPMB. La letra H se sustituyé por la letra I, que es la siguiente en el orden del abecedario.

El usuario debe elegir si desea cifrar algún texto o descifrar uno.

Si decide cifrar:
Debe dar click en el botón de cifrar.
Elegir un número (offset), el cual es el que dictamina el desplazamiento.
Ingresar su texto a cifrar.
Dar click en el botón con forma de candado.
Y listo, aparecerá su mensaje en la parte de abajo.
Si desea volver a cifrar, solo debe dar click en borrar, para rellenar los campos.
Si decide descifrar:
Debe dar click en el botón de descifrar.
Ingresar el número de desplazamiento (Mismo que debe ser proporcionado por la persona que mando el mensaje).
Ingresar el texto a descifrar.
Y listo, aparecerá su mensaje descifrado en la parte de abajo.
Si desea volver a descifrar, solo debe dar click en borrar, para introducir el nuevo offset y texto.
¿Cómo se llegó a dicha idea?
Se le preguntó a 12 personas diferentes, 10 mujeres y 2 hombres de entre 20 y 30 años de edad para que utilizarían una página web que cifre y descifre textos. Se concluyó que utilizarían ese servicio dentro de las empresas, ya sea para mandar información delicada, o bien, mantener conversaciones privadas con sus compañeros de trabajo.

Explicación de colores:
Negro: Para denotar elegancia, formalidad y autoridad. Blanco: Limpieza y la nada (finalmente es la ausencia de un mensaje fácil de comprender). Azul: Para denotar seguridad y anónimato. Se utilizó una gama de colores amarillo y verde claros para diferenciar las secciones de cifrar y descifrar.

Definición del usuario:
El usuario de The Snitch es un joven adulto (hombre o mujer) entre 20 y 30 años que trabaja en oficina, tiene acceso a computadora y a un sistema de mensajería o correo electrónico ya sea privado o público que necesita mantenerse en comunicación con sus compañeros de trabajo.

Entre sus actividades debe compartir información delicada que sería un problema si la persona equivocada llegará a dicha data. O bien, una persona que disfruta enviar chascarrillos a sus pares. Generalmente después de trabajar es usual que salga a comer o beber con sus compañeros de trabajo.

Su experiencia laboral puede ser menor a un año.

Perfil de usuario:
Hombre o mujer entre 20 a 40 años (90 % mujeres) Trabajo: administrativos, directivos, empleados con acceso a computadora el 100 % del tiempo. Trabaja de 8 a 10 horas diarias. Su educación es carrera técnica o universitaria. Tecnología: acceso a computadora y experiencia de uso moderado, buena velocidad de internet. Estatus civil: casad@ o solter@.

Necesidades técnicas
Este proyecto se realizó con HTML, JavaScript y CSS.

¿Cómo ejecutar este proyecto?
Solo necesitas un navegador y dar click en el siguiente link: https://iselareyesperdomo94.github.io/MEX-008-Cipher/src/index.html

¿Cómo puedo descargar, instalar y ejecutar este proyecto?
Necesitas forkear este repositorio y clonarlo en tu computadora.
Tener un editor de texto.
Instalar Node.js y la librería de Mocha.
Para ejecutar los test, debes correr en tu terminal npm run test.