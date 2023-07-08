var clipboardButton = document.getElementById("clipboardCopy");
clipboardButton.addEventListener("click", function() {
  var frase = document.getElementById("frase-dentro");
  var texto = frase.innerText;
  navigator.clipboard.writeText(texto).then(function() {
    console.log("Texto copiado: " + texto);
  }, function(err) {
    console.error("Erro ao copiar texto: ", err);
  });
});