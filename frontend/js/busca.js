// Script para funcionalidade de busca no header

document.addEventListener("DOMContentLoaded", function () {
  const inputBusca = document.getElementById("busca-header");
  const btnBusca = document.querySelector(".header-busca button");

  // Função para realizar a busca
  function realizarBusca() {
    const termo = inputBusca.value.trim();

    if (termo) {
      // Salvar o termo de busca no localStorage
      localStorage.setItem("termoBusca", termo);

      // Detectar se estamos na raiz ou em /pages/
      const currentPath = window.location.pathname;
      let receitasPath;

      if (currentPath.includes("/pages/")) {
        // Já estamos em /pages/, usar caminho relativo
        receitasPath = "receitas.html";
      } else {
        // Estamos na raiz, ir para /pages/
        receitasPath = "pages/receitas.html";
      }

      // Redirecionar para a página de receitas
      window.location.href = receitasPath;
    }
  }

  // Buscar ao clicar no botão
  if (btnBusca) {
    btnBusca.addEventListener("click", realizarBusca);
  }

  // Buscar ao pressionar Enter
  if (inputBusca) {
    inputBusca.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        realizarBusca();
      }
    });
  }
});
