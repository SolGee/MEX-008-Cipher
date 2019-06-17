window.cipher = {
  encode: (offset, string) => {
    let textCoded = '';
    let stringMay = string.toUpperCase();
    for(let i = 0; i < stringMay.length; i++){
      let stringInAsccii = stringMay.charCodeAt(i);
      let asciiWithOffset = (stringInAsccii - 65 + offset ) % 26 + 65;
      let aOffsetToText = String.fromCharCode(asciiWithOffset);
      textCoded += aOffsetToText;
    }
    return textCoded;
  },
  decode: (offset, string) => {
    let textDecoded = '';
    let stringMay = stringMay.toUpperCase();
    for(let i = 0; i < stringMay.length; i++){
      let stringInAsccii = stringMay.charCodeAt(i);
      let asciiWithoutOffset = (stringInAsccii - 65 - offset + 52) % 26 + 65;
      let fromAsciiToText = String.fromCharCode(asciiWithoutOffset);
      textDecoded += fromAsciiToText;
    }return textDecoded;
  }
};