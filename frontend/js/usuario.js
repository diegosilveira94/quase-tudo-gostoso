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

  // Formulário de Login - Integração com API
  const formLoginElement = formLogin.querySelector("form");
  formLoginElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Obter valores dos campos
    const email = document.getElementById("login-email").value.trim();
    const senha = document.getElementById("login-senha").value;

    // Validação básica
    if (!email || !senha) {
      alert("Por favor, preencha email e senha!");
      return;
    }

    // Desabilitar botão durante envio
    const btnSubmit = formLoginElement.querySelector(".btn-submit");
    const textoOriginal = btnSubmit.textContent;
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Entrando...";

    try {
      // Enviar requisição para API
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const resultado = await response.json();

      if (response.ok) {
        // Login bem-sucedido
        alert(`Bem-vindo(a), ${resultado.usuario.nome}!`);

        // Salvar dados do usuário no localStorage
        localStorage.setItem("usuario", JSON.stringify(resultado.usuario));

        // Redirecionar para página inicial
        setTimeout(() => {
          window.location.href = "../index.html";
        }, 1000);
      } else {
        // Erro de autenticação
        alert(resultado.erro || "Email ou senha incorretos!");
      }
    } catch (erro) {
      console.error("Erro ao fazer login:", erro);
      alert(
        "Erro ao conectar com o servidor. Verifique se o backend está rodando."
      );
    } finally {
      // Reabilitar botão
      btnSubmit.disabled = false;
      btnSubmit.textContent = textoOriginal;
    }
  });

  // Formulário de Cadastro - Integração com API
  const formCadastroElement = document.getElementById("form-cadastro-usuario");
  formCadastroElement.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Obter valores dos campos
    const nome = document.getElementById("cadastro-nome").value.trim();
    const email = document.getElementById("cadastro-email").value.trim();
    const senha = document.getElementById("cadastro-senha").value;
    const confirmarSenha = document.getElementById("cadastro-confirmar").value;
    const dataNascimento = document.getElementById(
      "cadastro-data-nascimento"
    ).value;
    const genero = document.getElementById("cadastro-genero").value;
    const cep = document.getElementById("cadastro-cep").value.trim();

    // Validações no frontend
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos obrigatórios!");
      return;
    }

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres!");
      return;
    }

    if (cep && !/^[0-9]{8}$/.test(cep)) {
      alert("CEP inválido! Use apenas números (8 dígitos).");
      return;
    }

    // Preparar dados para envio
    const dados = {
      nome,
      email,
      senha,
    };

    // Adicionar campos opcionais apenas se preenchidos
    if (dataNascimento) dados.dataNascimento = dataNascimento;
    if (genero) dados.genero = genero;
    if (cep) dados.cep = cep;

    // Desabilitar botão durante envio
    const btnSubmit = formCadastroElement.querySelector(".btn-submit");
    const textoOriginal = btnSubmit.textContent;
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Cadastrando...";

    try {
      // Enviar requisição para API
      const response = await fetch(
        "http://localhost:3000/api/cadastrar-usuario",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dados),
        }
      );

      const resultado = await response.json();

      if (response.ok) {
        // Cadastro realizado com sucesso
        alert(
          `Cadastro realizado com sucesso! Bem-vindo(a), ${resultado.usuario.nome}!`
        );
        formCadastroElement.reset();

        // Opcional: redirecionar para login após 2 segundos
        setTimeout(() => {
          tabLogin.click(); // Mudar para aba de login
        }, 2000);
      } else {
        // Erro retornado pela API
        alert(
          `Erro: ${resultado.erro || "Não foi possível completar o cadastro."}`
        );
      }
    } catch (erro) {
      console.error("Erro ao cadastrar usuário:", erro);
      alert(
        "Erro ao conectar com o servidor. Verifique se o backend está rodando."
      );
    } finally {
      // Reabilitar botão
      btnSubmit.disabled = false;
      btnSubmit.textContent = textoOriginal;
    }
  });
});
