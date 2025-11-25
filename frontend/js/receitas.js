// Dados das receitas (simulando dados que viriam da API)
const receitasData = [
  {
    id: 1,
    titulo: "Lasanha à Bolonhesa Clássica",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: 60,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 2,
    titulo: "Mousse de Chocolate Cremoso",
    categoria: "Sobremesas",
    dificuldade: "Fácil",
    tempo: 30,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 3,
    titulo: "Risoto de Cogumelos Selvagens",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: 50,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 4,
    titulo: "Salada Caesar com Frango Grelhado",
    categoria: "Saladas",
    dificuldade: "Fácil",
    tempo: 30,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 5,
    titulo: "Pão de Queijo Caseiro",
    categoria: "Lanches",
    dificuldade: "Fácil",
    tempo: 50,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 6,
    titulo: "Sopa de Legumes com Massa",
    categoria: "Pratos Principais",
    dificuldade: "Fácil",
    tempo: 40,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 7,
    titulo: "Moqueca Capixaba Vegana",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: 90,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 8,
    titulo: "Torta de Frango com Requeijão",
    categoria: "Lanches",
    dificuldade: "Médio",
    tempo: 90,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 9,
    titulo: "Bolo de Cenoura com Cobertura de Chocolate",
    categoria: "Sobremesas",
    dificuldade: "Fácil",
    tempo: 60,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 10,
    titulo: "Escondidinho de Carne Seca",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: 90,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 11,
    titulo: "Brownie Vegano de Cacau",
    categoria: "Sobremesas",
    dificuldade: "Fácil",
    tempo: 30,
    imagem: "../assets/img/lasanha.png",
  },
  {
    id: 12,
    titulo: "Strogonoff de Camarão",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: 30,
    imagem: "../assets/img/lasanha.png",
  },
];

// Variável para armazenar todas as receitas
let todasReceitas = [...receitasData];
let receitasFiltradas = [...receitasData];

// Função para criar o card de uma receita
function criarCardReceita(receita) {
  const card = document.createElement("article");
  card.className = "receita-card";
  card.onclick = () => abrirDetalheReceita(receita.id);

  card.innerHTML = `
    <img src="${receita.imagem}" alt="${receita.titulo}" class="receita-imagem">
    <div class="receita-conteudo">
      <h3 class="receita-titulo">${receita.titulo}</h3>
      <div class="receita-info">
        <label class="categoria-label">${receita.categoria}</label>
        <label class="dificuldade-label">${receita.dificuldade}</label>
        <label class="tempo-label">⏱ ${receita.tempo} min</label>
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
  // Aqui você pode redirecionar para página de detalhes
  // Por enquanto só mostra um alert
  alert(`Abrindo detalhes da receita ${id}`);
  // window.location.href = `detalhe.html?id=${id}`;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Renderizar receitas inicialmente
  renderizarReceitas(todasReceitas);

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
