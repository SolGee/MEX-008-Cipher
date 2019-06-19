window.cipher = {
  encode: (offset, string) => {
    let textCoded = ''; // Se declara una variable vacia para rellenar con el texto cifrado o descifrado
    let stringMay = string.toUpperCase(); // Se declara una variable que pasa los valores del parametro string a MAYUSCULA
    for(let i = 0; i < stringMay.length; i++){ // Declaras el index con un valor inicial de 0. Cuando i sea menor al largo de stringMay se le agregara 1 a i
      let stringAsccii = stringMay.charCodeAt(i); // El metodo charCodeAt devuelve el valor Unicode de los caracteres. La i para A seria 65
      let asciiWithOffset = (stringAsccii - 65 + offset ) % 26 + 65; //Se aplica la formula de cifrado del código César
      let aOffsetToText = String.fromCharCode(asciiWithOffset); // Se determina el valor inicial de A en la función. fromCharCode regresa el string equivalente al valor unicode
      textCoded += aOffsetToText; // se reasigna el valor de textCoded a textCoded + aOffsetToText
    }
    return textCoded;
  },
  
  decode: (offset, string) => {
    let textDecoded = '';
    let stringMay = string.toUpperCase();
    for(let i = 0; i < stringMay.length; i++){
      let stringAsccii = stringMay.charCodeAt(i);
      let asciiWithoutOffset = (stringAsccii + 65 - offset) % 26 + 65; // Se invierten signos
      let fromAsciiToText = String.fromCharCode(asciiWithoutOffset);
      textDecoded += fromAsciiToText;
    }return textDecoded;
  }
};