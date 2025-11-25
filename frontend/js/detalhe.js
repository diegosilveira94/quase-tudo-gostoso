// Função para formatar data de comentário
function formatarData(data) {
  const agora = new Date();
  const dataComentario = new Date(data);
  const diferenca = agora - dataComentario;
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  if (dias === 0) {
    return "Hoje";
  } else if (dias === 1) {
    return "1 dia atrás";
  } else if (dias < 7) {
    return `${dias} dias atrás`;
  } else if (dias < 14) {
    return "1 semana atrás";
  } else if (dias < 30) {
    const semanas = Math.floor(dias / 7);
    return `${semanas} semanas atrás`;
  } else if (dias < 60) {
    return "1 mês atrás";
  } else {
    const meses = Math.floor(dias / 30);
    return `${meses} meses atrás`;
  }
}

// Função para criar um comentário
function criarComentario(autor, texto, data) {
  const comentarioDiv = document.createElement("div");
  comentarioDiv.className = "comentario";

  comentarioDiv.innerHTML = `
    <div class="comentario-header">
      <img src="../assets/img/user-avatar.jpg" alt="Avatar" class="comentario-avatar" />
      <div>
        <strong>${autor}</strong>
        <span class="comentario-data">${formatarData(data)}</span>
      </div>
    </div>
    <p class="comentario-texto">
      ${texto}
    </p>
  `;

  return comentarioDiv;
}

// Função para adicionar comentário
function adicionarComentario(event) {
  event.preventDefault();

  const textarea = document.getElementById("comentario-texto");
  const textoComentario = textarea.value.trim();

  if (!textoComentario) {
    alert("Por favor, escreva um comentário antes de enviar!");
    return;
  }

  // Nome do usuário (por enquanto fixo, depois pode vir de login)
  const nomeUsuario = "Você";
  const dataAtual = new Date();

  // Criar o novo comentário
  const novoComentario = criarComentario(
    nomeUsuario,
    textoComentario,
    dataAtual
  );

  // Adicionar no início da lista de comentários
  const listaComentarios = document.querySelector(".comentarios-lista");
  listaComentarios.insertBefore(novoComentario, listaComentarios.firstChild);

  // Limpar o textarea
  textarea.value = "";

  // Mostrar mensagem de sucesso
  alert("Comentário adicionado com sucesso!");

  // Scroll suave até o comentário adicionado
  novoComentario.scrollIntoView({ behavior: "smooth", block: "center" });
}

// Banco de comentários fictícios por receita
const comentariosPorReceita = {
  1: [
    // Lasanha à Bolonhesa
    {
      autor: "Maria Silva",
      texto:
        "Fiz essa lasanha para o almoço de domingo e foi um sucesso! A família toda repetiu. O molho bolonhesa ficou perfeito, cozinhei por 30 minutos como recomendado.",
      data: new Date(2024, 10, 15),
    },
    {
      autor: "João Costa",
      texto:
        "Melhor receita de lasanha que já experimentei! Ficou super cremosa e saborosa. Só aumentei um pouco o queijo porque aqui em casa todo mundo ama 😄",
      data: new Date(2024, 10, 18),
    },
    {
      autor: "Ana Paula",
      texto:
        "Perfeita! Fiz exatamente como está na receita e deu super certo. Obrigada por compartilhar!",
      data: new Date(2024, 10, 20),
    },
  ],
  2: [
    // Petit Gâteau
    {
      autor: "Carlos Mendes",
      texto:
        "Esse petit gâteau é sensacional! O tempo de 8 minutos no forno foi exato para deixar o centro cremoso. Acompanhei com sorvete de creme e ficou divino!",
      data: new Date(2024, 10, 16),
    },
    {
      autor: "Beatriz Lima",
      texto:
        "Fiz para o jantar de aniversário do meu marido e ele amou! O chocolate derretido no centro é incrível ❤️",
      data: new Date(2024, 10, 19),
    },
  ],
  3: [
    // Salada Caprese
    {
      autor: "Roberto Alves",
      texto:
        "Simplicidade em forma de receita! Os ingredientes frescos fazem toda a diferença. Usei tomate orgânico e ficou ainda melhor.",
      data: new Date(2024, 10, 14),
    },
    {
      autor: "Camila Santos",
      texto:
        "Adoro essa salada! Leve, refrescante e super fácil de fazer. Perfeita para dias quentes.",
      data: new Date(2024, 10, 21),
    },
    {
      autor: "Fernando Dias",
      texto:
        "Dica: coloque um fio de mel junto com o vinagre balsâmico, fica incrível!",
      data: new Date(2024, 10, 22),
    },
  ],
  4: [
    // Pizza de Pepperoni
    {
      autor: "Juliana Souza",
      texto:
        "Primeira vez fazendo massa de pizza em casa e ficou maravilhosa! Crocante e saborosa. Nunca mais peço delivery!",
      data: new Date(2024, 10, 13),
    },
    {
      autor: "Pedro Oliveira",
      texto:
        "A massa é muito boa, mas precisa de paciência para deixar crescer direitinho. Vale cada minuto de espera!",
      data: new Date(2024, 10, 17),
    },
  ],
  5: [
    // Frango Assado
    {
      autor: "Márcia Ferreira",
      texto:
        "O frango ficou suculento por dentro e crocante por fora! As ervas dão um sabor especial. As batatas assadas junto são maravilhosas!",
      data: new Date(2024, 10, 12),
    },
    {
      autor: "Lucas Martins",
      texto:
        "Receita top! Fiz para o almoço de família e todos elogiaram muito. O segredo é mesmo a marinada.",
      data: new Date(2024, 10, 19),
    },
    {
      autor: "Patricia Rocha",
      texto:
        "Delicioso! Acrescentei limão siciliano e ficou ainda mais aromático.",
      data: new Date(2024, 10, 21),
    },
  ],
  6: [
    // Risoto de Cogumelos
    {
      autor: "Ricardo Gomes",
      texto:
        "Que risoto incrível! Cremoso na medida certa. Os cogumelos frescos fazem toda a diferença no sabor.",
      data: new Date(2024, 10, 11),
    },
    {
      autor: "Sophia Costa",
      texto:
        "Fiz para um jantar especial e impressionou! O ponto do arroz ficou perfeito, bem al dente.",
      data: new Date(2024, 10, 18),
    },
  ],
  7: [
    // Mousse de Chocolate
    {
      autor: "Amanda Pires",
      texto:
        "Mousse perfeita! Leve, aerada e com sabor intenso de chocolate. Deixei na geladeira de um dia para o outro e ficou ainda melhor!",
      data: new Date(2024, 10, 10),
    },
    {
      autor: "Gabriel Nunes",
      texto:
        "Muito boa! Usei chocolate 70% cacau e ficou com amargor equilibrado. Recomendo!",
      data: new Date(2024, 10, 16),
    },
    {
      autor: "Larissa Moura",
      texto:
        "A textura ficou maravilhosa! O segredo está em incorporar as claras delicadamente mesmo.",
      data: new Date(2024, 10, 20),
    },
  ],
  8: [
    // Salada Caesar
    {
      autor: "Thiago Barros",
      texto:
        "Salada completa e deliciosa! O frango grelhado fica suculento e combina perfeitamente com o molho Caesar.",
      data: new Date(2024, 10, 15),
    },
    {
      autor: "Renata Silva",
      texto:
        "Faço direto essa salada! É minha preferida. Só aumentei a quantidade de parmesão 😊",
      data: new Date(2024, 10, 19),
    },
  ],
  9: [
    // Pão de Queijo
    {
      autor: "Vanessa Cruz",
      texto:
        "Pão de queijo caseiro é outra coisa! Ficou igualzinho ao de padaria. Congelei metade da massa para fazer depois.",
      data: new Date(2024, 10, 14),
    },
    {
      autor: "Marcos Vieira",
      texto:
        "Delícia demais! O queijo minas faz toda diferença. Impossível comer só um!",
      data: new Date(2024, 10, 17),
    },
    {
      autor: "Daniela Lopes",
      texto:
        "Perfeitos! Crocantes por fora e fofinhos por dentro. Receita aprovadíssima!",
      data: new Date(2024, 10, 21),
    },
  ],
  10: [
    // Sopa de Legumes
    {
      autor: "Carla Pereira",
      texto:
        "Sopa deliciosa e nutritiva! Perfeita para dias frios. Acrescentei um pouco de batata doce e ficou ainda mais saborosa.",
      data: new Date(2024, 10, 13),
    },
    {
      autor: "Bruno Teixeira",
      texto:
        "Confortante e saudável! Os legumes frescos fazem toda diferença no sabor.",
      data: new Date(2024, 10, 18),
    },
  ],
  11: [
    // Moqueca Vegana
    {
      autor: "Isabela Santos",
      texto:
        "Que moqueca maravilhosa! Nem sinto falta do peixe. O palmito absorve super bem o tempero e o leite de coco deixa cremoso.",
      data: new Date(2024, 10, 12),
    },
    {
      autor: "Rafael Cardoso",
      texto:
        "Sou vegano há 3 anos e essa é minha receita favorita! O azeite de dendê é essencial!",
      data: new Date(2024, 10, 16),
    },
    {
      autor: "Paula Reis",
      texto:
        "Incrível! Fiz para amigos não-veganos e todos adoraram. Prova que comida vegana é deliciosa!",
      data: new Date(2024, 10, 20),
    },
  ],
  12: [
    // Torta de Frango
    {
      autor: "Luciana Macedo",
      texto:
        "Essa torta salvou meu almoço! Super prática e deliciosa. A massa cresceu perfeitamente.",
      data: new Date(2024, 10, 11),
    },
    {
      autor: "André Ribeiro",
      texto:
        "Maravilhosa! O requeijão deixa o recheio super cremoso. Já virou receita de família!",
      data: new Date(2024, 10, 17),
    },
  ],
  13: [
    // Bolo de Cenoura
    {
      autor: "Cristina Almeida",
      texto:
        "O bolo mais fácil e gostoso! A cobertura de chocolate é viciante. Fiz ontem e já acabou 😄",
      data: new Date(2024, 10, 10),
    },
    {
      autor: "Felipe Augusto",
      texto:
        "Clássico perfeito! Massa fofinha e úmida. A dica é não assar demais para não ressecar.",
      data: new Date(2024, 10, 15),
    },
    {
      autor: "Monique Araújo",
      texto:
        "Melhor bolo de cenoura que já comi! A proporção dos ingredientes está perfeita.",
      data: new Date(2024, 10, 19),
    },
  ],
  14: [
    // Escondidinho
    {
      autor: "Rodrigo Freitas",
      texto:
        "Que escondidinho maravilhoso! A carne seca temperada com cebola e alho fica sensacional. O purê de mandioca cremoso é o segredo!",
      data: new Date(2024, 10, 14),
    },
    {
      autor: "Tatiana Borges",
      texto:
        "Delícia nordestina! Dessalguei bem a carne e ficou no ponto. O queijo gratinado por cima é irresistível!",
      data: new Date(2024, 10, 18),
    },
    {
      autor: "Vinicius Melo",
      texto:
        "Perfeito para domingo em família! Farto e muito saboroso. Já fiz 3 vezes!",
      data: new Date(2024, 10, 21),
    },
  ],
  15: [
    // Brownie Vegano
    {
      autor: "Giovana Duarte",
      texto:
        "Brownie vegano perfeito! Denso, úmido e super chocolatudo. Ninguém acredita que não tem ovo!",
      data: new Date(2024, 10, 13),
    },
    {
      autor: "Leandro Castro",
      texto:
        "Impressionante como fica bom! Não veganos adoraram também. O óleo de coco faz toda diferença.",
      data: new Date(2024, 10, 17),
    },
  ],
  16: [
    // Strogonoff de Camarão
    {
      autor: "Fabiana Ramos",
      texto:
        "Strogonoff delicioso! Os camarões ficaram no ponto e o molho cremoso. Perfeito com arroz branco!",
      data: new Date(2024, 10, 12),
    },
    {
      autor: "Gustavo Moreira",
      texto:
        "Sofisticado e fácil de fazer! Os champignons complementam muito bem o sabor dos camarões.",
      data: new Date(2024, 10, 16),
    },
    {
      autor: "Priscila Cunha",
      texto: "Maravilhoso! Fiz para um jantar romântico e foi sucesso total ❤️",
      data: new Date(2024, 10, 20),
    },
  ],
  17: [
    // Risoto de Cogumelos Selvagens
    {
      autor: "Eduardo Monteiro",
      texto:
        "Risoto de restaurante! Os cogumelos porcini hidratados dão um sabor incrível. Vale cada minuto mexendo!",
      data: new Date(2024, 10, 11),
    },
    {
      autor: "Fernanda Correia",
      texto:
        "Perfeito! O shiitake fresco com o porcini seco é uma combinação maravilhosa. Ficou cremoso e sofisticado.",
      data: new Date(2024, 10, 15),
    },
  ],
};

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  // Carregar dados da receita da URL
  const urlParams = new URLSearchParams(window.location.search);
  const receitaId = parseInt(urlParams.get("id"));

  if (receitaId && typeof obterReceitaPorId === "function") {
    const receita = obterReceitaPorId(receitaId);

    if (receita) {
      // Atualizar título e imagem do banner
      document.getElementById("receita-titulo").textContent = receita.titulo;
      document.getElementById("receita-imagem").src = receita.imagem;

      // Atualizar descrição no parágrafo abaixo do banner
      const receitaHistoria = document.getElementById("receita-historia");
      if (receitaHistoria) {
        receitaHistoria.textContent = receita.descricao;
      }

      // Atualizar informações da receita (se existirem os elementos)
      const statLabels = document.querySelectorAll(".stat-label");
      if (statLabels.length >= 3) {
        statLabels[0].textContent = receita.dificuldade;
        statLabels[1].textContent = receita.tempo;
        statLabels[2].textContent = receita.porcoes || "4 porções";
      }

      // Atualizar ingredientes
      if (receita.ingredientes && receita.ingredientes.length > 0) {
        const ingredientesLista = document.getElementById("ingredientes-1");
        if (ingredientesLista) {
          ingredientesLista.innerHTML = "";
          receita.ingredientes.forEach((ing) => {
            const li = document.createElement("li");
            li.textContent = ing;
            ingredientesLista.appendChild(li);
          });
        }
      }

      // Atualizar modo de preparo
      if (receita.preparo && receita.preparo.length > 0) {
        const preparoLista = document.getElementById("modo-preparo");
        if (preparoLista) {
          preparoLista.innerHTML = "";
          receita.preparo.forEach((passo) => {
            const li = document.createElement("li");
            li.textContent = passo;
            preparoLista.appendChild(li);
          });
        }
      }

      // Carregar comentários fictícios da receita
      const comentariosDaReceita = comentariosPorReceita[receitaId];
      if (comentariosDaReceita && comentariosDaReceita.length > 0) {
        const listaComentarios = document.querySelector(".comentarios-lista");
        if (listaComentarios) {
          // Limpar comentários existentes (se houver)
          listaComentarios.innerHTML = "";

          // Adicionar comentários da receita
          comentariosDaReceita.forEach((comentario) => {
            const comentarioElement = criarComentario(
              comentario.autor,
              comentario.texto,
              comentario.data
            );
            listaComentarios.appendChild(comentarioElement);
          });
        }
      }
    }
  }

  // Adicionar evento ao formulário de comentários
  const form = document.querySelector(".comentario-form");
  if (form) {
    form.addEventListener("submit", adicionarComentario);
  }
});
