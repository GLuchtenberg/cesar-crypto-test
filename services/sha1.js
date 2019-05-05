const cryptoJS = require("crypto-js");

function execute(data) {
  const sha1Text = cryptoJS.SHA1(data.decifrado);
  data.resumo_criptografico = sha1Text.toString();
}
module.exports = execute;
