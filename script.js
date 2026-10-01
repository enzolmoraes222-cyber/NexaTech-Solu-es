// ==========================================
// VERDINHA MATES - SISTEMA DE RECURSOS HUMANOS
// Arquivo: script.js
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // ELEMENTOS DO MENU
    // ==========================================

    const menuLinks = document.querySelectorAll(".menu-link");

    // ==========================================
    // NAVEGAÇÃO DO MENU
    // ==========================================

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            event.preventDefault();

            // Remove o destaque dos outros itens
            menuLinks.forEach(function (item) {
                item.classList.remove("ativo");
            });

            // Destaca o item selecionado
            this.classList.add("ativo");

            // Nome da página selecionada
            const pagina = this.textContent.trim();

            console.log("Página selecionada: " + pagina);

        });

    });

    // ==========================================
    // BOTÃO DE MENU MOBILE
    // ==========================================

    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {

        menuButton.addEventListener("click", function () {

            menu.classList.toggle("aberto");

        });

    }

    // ==========================================
    // DATA ATUAL
    // ==========================================

    const dataAtual = document.querySelector("#data-atual");

    if (dataAtual) {

        const data = new Date();

        const dia = String(data.getDate()).padStart(2, "0");
        const mes = String(data.getMonth() + 1).padStart(2, "0");
        const ano = data.getFullYear();

        dataAtual.textContent = dia + "/" + mes + "/" + ano;

    }

    // ==========================================
    // MENSAGEM DE BOAS-VINDAS
    // ==========================================

    const mensagem = document.querySelector("#mensagem-boas-vindas");

    if (mensagem) {

        mensagem.textContent =
            "Bem-vindo ao sistema de Recursos Humanos da Verdinha Mates!";

    }

    // ==========================================
    // BOTÕES DO SISTEMA
    // ==========================================

    const botoes = document.querySelectorAll("button");

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            console.log("Botão clicado: " + this.textContent.trim());

        });

    });

    // ==========================================
    // FUNÇÃO PARA MOSTRAR ALERTAS
    // ==========================================

    function mostrarMensagem(texto) {

        alert(texto);

    }

    // ==========================================
    // BOTÃO DE SAÍDA
    // ==========================================

    const botaoSair = document.querySelector("#btn-sair");

    if (botaoSair) {

        botaoSair.addEventListener("click", function () {

            const confirmar = confirm(
                "Deseja realmente sair do sistema?"
            );

            if (confirmar) {

                mostrarMensagem("Saída realizada com sucesso.");

            }

        });

    }

    // ==========================================
    // PESQUISA
    // ==========================================

    const campoPesquisa = document.querySelector("#pesquisa");

    if (campoPesquisa) {

        campoPesquisa.addEventListener("input", function () {

            const termo = this.value.toLowerCase().trim();

            console.log("Pesquisando por: " + termo);

        });

    }

    // ==========================================
    // CARDS DO DASHBOARD
    // ==========================================

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            const titulo = this.querySelector("h3");

            if (titulo) {

                console.log(
                    "Card selecionado: " + titulo.textContent.trim()
                );

            }

        });

    });

    // ==========================================
    // FINALIZAÇÃO
    // ==========================================

    console.log(
        "Sistema Verdinha Mates carregado com sucesso."
    );

});
