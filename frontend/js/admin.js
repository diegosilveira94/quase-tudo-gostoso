// Script para página de administração

document.addEventListener("DOMContentLoaded", function () {
  // Gerenciar tabs
  const tabBtns = document.querySelectorAll(".admin-tab-btn");
  const tabContents = document.querySelectorAll(".admin-tab-content");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabName = this.getAttribute("data-tab");

      // Remover active de todos
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabContents.forEach((c) => c.classList.remove("active"));

      // Adicionar active no clicado
      this.classList.add("active");
      document.getElementById(`tab-${tabName}`).classList.add("active");
    });
  });

  // Prevenir submit dos formulários
  const forms = document.querySelectorAll(".admin-form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector('input[type="text"]');
      const valor = input.value.trim();

      if (valor) {
        alert(
          `Item "${valor}" adicionado com sucesso!\n\n(Funcionalidade de banco de dados em desenvolvimento)`
        );
        input.value = "";
      }
    });
  });

  // Botões de editar
  const btnsEditar = document.querySelectorAll(".btn-editar");
  btnsEditar.forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const nome = row.querySelector("td").textContent;
      alert(`Editar: ${nome}\n\n(Funcionalidade em desenvolvimento)`);
    });
  });

  // Botões de excluir
  const btnsExcluir = document.querySelectorAll(".btn-excluir");
  btnsExcluir.forEach((btn) => {
    btn.addEventListener("click", function () {
      const row = this.closest("tr");
      const nome = row.querySelector("td").textContent;

      if (confirm(`Tem certeza que deseja excluir "${nome}"?`)) {
        row.remove();
        alert(
          "Item excluído com sucesso!\n\n(Em produção, isso seria salvo no banco de dados)"
        );
      }
    });
  });
});
