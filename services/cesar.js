var fs = require("fs");

function execute(data) {
  function charConversion(character) {
    const ascii = character.charCodeAt(0);
    const encryptedAscII = String.fromCharCode(ascii - numeroCasas);

    return encryptedAscII;
  }
  const { numero_casas: numeroCasas, cifrado } = data;
  const convertedText = cifrado
    .split("")
    .map(charConversion)
    .join("");

  data.decifrado = convertedText;
}

module.exports = execute;
