// Variável para armazenar todas as receitas
let todasReceitas = [...receitasData];
let receitasFiltradas = [...receitasData];

// Função para criar o card de uma receita
function criarCardReceita(receita) {
  const card = document.createElement("article");
  card.className = "receita-card";
  card.onclick = () => abrirDetalheReceita(receita.id);

  // Converter tempo para string se for número
  const tempoStr =
    typeof receita.tempo === "number" ? `${receita.tempo} min` : receita.tempo;

  card.innerHTML = `
    <img src="${receita.imagem}" alt="${receita.titulo}" class="receita-imagem">
    <div class="receita-conteudo">
      <h3 class="receita-titulo">${receita.titulo}</h3>
      <div class="receita-info">
        <label class="categoria-label">${receita.categoria}</label>
        <label class="dificuldade-label">${receita.dificuldade}</label>
        <label class="tempo-label">⏱ ${tempoStr}</label>
      </div>
    </div>
  `;

  return card;
}

// Função para renderizar as receitas na tela
function renderizarReceitas(receitas) {
  const container = document.getElementById("receitas-container");
  container.innerHTML = "";

  if (receitas.length === 0) {
    container.innerHTML =
      '<div class="sem-receitas">Nenhuma receita encontrada com os filtros selecionados.</div>';
    return;
  }

  receitas.forEach((receita) => {
    const card = criarCardReceita(receita);
    container.appendChild(card);
  });
}

// Função para aplicar filtros
function aplicarFiltros() {
  const categoriaFiltro = document.getElementById("filtro-categoria").value;
  const dificuldadeFiltro = document.getElementById("filtro-dificuldade").value;
  const tempoFiltro = document.getElementById("filtro-tempo").value;
  const buscaTexto = document
    .getElementById("busca-receitas")
    .value.toLowerCase();

  receitasFiltradas = todasReceitas.filter((receita) => {
    // Filtro de categoria
    if (categoriaFiltro && receita.categoria !== categoriaFiltro) {
      return false;
    }

    // Filtro de dificuldade
    if (dificuldadeFiltro && receita.dificuldade !== dificuldadeFiltro) {
      return false;
    }

    // Filtro de tempo
    if (tempoFiltro) {
      const tempo = parseInt(tempoFiltro);
      if (receita.tempo > tempo) {
        return false;
      }
    }

    // Filtro de busca por texto
    if (buscaTexto && !receita.titulo.toLowerCase().includes(buscaTexto)) {
      return false;
    }

    return true;
  });

  renderizarReceitas(receitasFiltradas);
}

// Função para limpar filtros
function limparFiltros() {
  document.getElementById("filtro-categoria").value = "";
  document.getElementById("filtro-dificuldade").value = "";
  document.getElementById("filtro-tempo").value = "";
  document.getElementById("busca-receitas").value = "";

  receitasFiltradas = [...todasReceitas];
  renderizarReceitas(receitasFiltradas);
}

// Função para abrir detalhes da receita
function abrirDetalheReceita(id) {
  window.location.href = `detalhe.html?id=${id}`;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Verificar se há termo de busca no localStorage
  const termoBusca = localStorage.getItem("termoBusca");
  if (termoBusca) {
    document.getElementById("busca-receitas").value = termoBusca;
    localStorage.removeItem("termoBusca"); // Limpar após usar
    aplicarFiltros();
  } else {
    // Renderizar receitas inicialmente
    renderizarReceitas(todasReceitas);
  }

  // Botão limpar filtros
  document
    .getElementById("limpar-filtros")
    .addEventListener("click", limparFiltros);

  // Busca em tempo real
  document
    .getElementById("busca-receitas")
    .addEventListener("input", aplicarFiltros);

  // Aplicar filtros quando selecionar algo nos selects
  document
    .getElementById("filtro-categoria")
    .addEventListener("change", aplicarFiltros);
  document
    .getElementById("filtro-dificuldade")
    .addEventListener("change", aplicarFiltros);
  document
    .getElementById("filtro-tempo")
    .addEventListener("change", aplicarFiltros);
});
