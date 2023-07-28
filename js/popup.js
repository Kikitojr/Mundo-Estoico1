// Função para exibir o pop-up
function exibirPopup() {
    var popup = document.getElementById("popup-nos");
    popup.style.display = "block";
}

// Função para fechar o pop-up
function fecharPopup() {
    var popup = document.getElementById("popup-nos");
    popup.style.display = "none";
}

// Chamar a função de exibir o pop-up quando a página carregar
window.onload = exibirPopup;
