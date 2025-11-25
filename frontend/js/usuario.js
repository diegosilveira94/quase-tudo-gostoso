// Script para página de usuário (Login/Cadastro)

document.addEventListener("DOMContentLoaded", function () {
  const tabLogin = document.getElementById("tab-login");
  const tabCadastro = document.getElementById("tab-cadastro");
  const formLogin = document.getElementById("form-login");
  const formCadastro = document.getElementById("form-cadastro");

  // Alternar entre tabs
  tabLogin.addEventListener("click", function () {
    tabLogin.classList.add("active");
    tabCadastro.classList.remove("active");
    formLogin.classList.remove("hidden");
    formCadastro.classList.add("hidden");
  });

  tabCadastro.addEventListener("click", function () {
    tabCadastro.classList.add("active");
    tabLogin.classList.remove("active");
    formCadastro.classList.remove("hidden");
    formLogin.classList.add("hidden");
  });

  // Prevenir submit dos formulários (por enquanto)
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Funcionalidade em desenvolvimento! Em breve você poderá fazer login/cadastro."
      );
    });
  });
});
