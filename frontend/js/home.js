// Script para a página inicial

document.addEventListener("DOMContentLoaded", function () {
  // Carregar receitas em destaque (primeiras 6 receitas)
  const receitasDestaque = receitasData.slice(0, 6);
  const container = document.getElementById("receitas-destaque");

  receitasDestaque.forEach((receita) => {
    const card = criarCardDestaque(receita);
    container.appendChild(card);
  });
});

// Função para criar card de receita em destaque
function criarCardDestaque(receita) {
  const card = document.createElement("article");
  card.className = "receita-destaque-card";
  card.onclick = () =>
    (window.location.href = `pages/detalhe.html?id=${receita.id}`);

  card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.titulo}" class="receita-destaque-img">
        <div class="receita-destaque-info">
            <h3>${receita.titulo}</h3>
            <div class="receita-destaque-labels">
                <span class="label-categoria">${receita.categoria}</span>
                <span class="label-tempo">⏱ ${receita.tempo}</span>
            </div>
        </div>
    `;

  return card;
}
