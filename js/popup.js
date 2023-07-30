// Função para exibir o pop-up apenas se ainda não foi exibido nesta sessão
function exibirPopup() {
    var popup = document.getElementById("popup-nos");

    // Verificar se o pop-up já foi exibido nesta sessão (utilizando sessionStorage)
    var popupExibido = sessionStorage.getItem("popupExibido");

    if (!popupExibido) {
        popup.style.display = "block";

        // Marcar que o pop-up foi exibido nesta sessão para não mostrar novamente
        sessionStorage.setItem("popupExibido", "true");
    }
}

// Função para fechar o pop-up
function fecharPopup() {
    var popup = document.getElementById("popup-nos");
    popup.style.display = "none";
}

// Chamar a função de exibir o pop-up quando a página carregar
window.onload = exibirPopup;
