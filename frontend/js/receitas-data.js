// Lista centralizada de todas as receitas do site
const receitasData = [
  {
    id: 1,
    titulo: "Lasanha à Bolonhesa Clássica",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "60 min",
    porcoes: "8 porções",
    imagem:
      "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500&h=350&fit=crop",
    descricao:
      "A rainha dos almoços de domingo! Esta lasanha à bolonhesa é preparada com camadas generosas de massa, molho de carne caseiro cozido lentamente, presunto e muito queijo derretido. Cada garfada é uma explosão de sabor que transporta você direto para uma trattoria italiana. O segredo está no tempo de cozimento do molho e no descanso antes de servir. Impossível comer só uma fatia!",
    ingredientes: [
      "500g de massa para lasanha",
      "500g de carne moída",
      "1 cebola picada",
      "3 dentes de alho",
      "800g de molho de tomate",
      "500g de queijo mussarela",
      "200g de presunto",
      "Sal e pimenta a gosto",
    ],
    preparo: [
      "Refogue a cebola e o alho, adicione a carne moída e tempere.",
      "Acrescente o molho de tomate e deixe cozinhar por 20 minutos.",
      "Em um refratário, monte camadas alternadas de massa, molho, presunto e queijo.",
      "Leve ao forno preaquecido a 180°C por 30-40 minutos.",
      "Deixe descansar por 10 minutos antes de servir.",
    ],
  },
  {
    id: 2,
    titulo: "Petit Gâteau de Chocolate",
    categoria: "Sobremesas",
    dificuldade: "Fácil",
    tempo: "20 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=350&fit=crop",
    descricao:
      "A sobremesa que conquistou o mundo! Pequeno por fora, mas com um coração de chocolate derretido que escorre quando você corta. Este bolinho individual é crocante nas bordas e incrivelmente cremoso no centro. Acompanhado de uma bola de sorvete de creme, cria um contraste de temperaturas que é pura magia. O tempo de forno é crucial - nem um minuto a mais!",
    ingredientes: [
      "200g de chocolate meio amargo",
      "100g de manteiga",
      "3 ovos",
      "3 colheres de açúcar",
      "2 colheres de farinha de trigo",
      "Manteiga e cacau para untar",
    ],
    preparo: [
      "Derreta o chocolate com a manteiga em banho-maria.",
      "Bata os ovos com o açúcar até obter um creme claro.",
      "Misture o chocolate derretido e adicione a farinha peneirada.",
      "Despeje em forminhas untadas e leve ao forno a 200°C por 8-10 minutos.",
      "Desenforme ainda quente e sirva com sorvete.",
    ],
  },
  {
    id: 3,
    titulo: "Salada Caprese Fresca",
    categoria: "Saladas",
    dificuldade: "Fácil",
    tempo: "10 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=500&h=350&fit=crop",
    descricao:
      "Uma das mais famosas receitas italianas, a Salada Caprese é a representação perfeita da simplicidade e qualidade dos ingredientes. Com apenas três componentes principais - tomate maduro, mussarela de búfala fresca e manjericão aromático - esta salada é um tributo às cores da bandeira italiana. Perfeita para dias quentes ou como entrada sofisticada.",
    ingredientes: [
      "4 tomates maduros",
      "300g de mussarela de búfala",
      "Folhas de manjericão fresco",
      "Azeite extra virgem",
      "Sal e pimenta a gosto",
      "Vinagre balsâmico",
    ],
    preparo: [
      "Corte os tomates e a mussarela em fatias de mesma espessura.",
      "Disponha alternadamente tomate e queijo em um prato.",
      "Adicione as folhas de manjericão entre as fatias.",
      "Regue com azeite e vinagre balsâmico.",
      "Tempere com sal e pimenta a gosto.",
    ],
  },
  {
    id: 4,
    titulo: "Pizza de Pepperoni",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "90 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&h=350&fit=crop",
    descricao:
      "Nada supera o prazer de fazer pizza em casa! Esta receita resulta em uma massa crocante por fora e macia por dentro, coberta com molho de tomate temperado, queijo mussarela generoso e fatias de pepperoni que ficam levemente crocantes no forno. O aroma que toma conta da cozinha é de dar água na boca. Perfeita para noites de fim de semana com a família ou amigos!",
    ingredientes: [
      "500g de farinha de trigo",
      "10g de fermento biológico",
      "300ml de água morna",
      "Sal e açúcar",
      "Molho de tomate",
      "200g de pepperoni",
      "300g de mussarela",
    ],
    preparo: [
      "Misture a farinha, fermento, sal, açúcar e água. Sove por 10 minutos.",
      "Deixe a massa descansar por 1 hora até dobrar de tamanho.",
      "Abra a massa em uma forma redonda untada.",
      "Espalhe o molho de tomate, cubra com queijo e pepperoni.",
      "Asse em forno preaquecido a 220°C por 15-20 minutos.",
    ],
  },
  {
    id: 5,
    titulo: "Frango Assado com Ervas",
    categoria: "Aves",
    dificuldade: "Fácil",
    tempo: "60 min",
    porcoes: "6 porções",
    imagem:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=350&fit=crop",
    descricao:
      "O clássico que nunca falha! Este frango assado é temperado com uma combinação aromática de ervas frescas que penetram na carne durante a marinada. Assado junto com batatas que absorvem todo o suco da ave, resulta em um prato completo e suculento. A pele fica dourada e crocante, enquanto a carne permanece úmida e saborosa. Sucesso garantido em qualquer ocasião!",
    ingredientes: [
      "1 frango inteiro (1,5kg)",
      "Alecrim, tomilho e sálvia",
      "4 dentes de alho",
      "Suco de 1 limão",
      "Azeite, sal e pimenta",
      "Batatas para acompanhar",
    ],
    preparo: [
      "Tempere o frango com sal, pimenta, alho, limão e ervas.",
      "Deixe marinar por 30 minutos.",
      "Disponha em assadeira com batatas ao redor.",
      "Regue com azeite e leve ao forno a 200°C por 50-60 minutos.",
      "Vire o frango na metade do tempo para dourar uniformemente.",
    ],
  },
  {
    id: 6,
    titulo: "Risoto de Cogumelos Cremoso",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "40 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500&h=350&fit=crop",
    descricao:
      "Este risoto é um clássico da culinária italiana que combina a cremosidade do arroz arbóreo com a riqueza dos cogumelos. Preparado lentamente com amor e paciência, cada grão absorve o sabor do caldo aromático e dos cogumelos salteados. Finalizado com manteiga e parmesão, resulta em um prato elegante e reconfortante, perfeito para ocasiões especiais.",
    ingredientes: [
      "300g de arroz arbóreo",
      "300g de cogumelos variados",
      "1 litro de caldo de legumes",
      "1 cebola pequena",
      "100ml de vinho branco",
      "50g de manteiga",
      "100g de parmesão ralado",
    ],
    preparo: [
      "Refogue a cebola na manteiga, adicione o arroz e torre levemente.",
      "Acrescente o vinho e deixe evaporar.",
      "Adicione o caldo aos poucos, mexendo sempre.",
      "Refogue os cogumelos à parte e adicione ao risoto.",
      "Finalize com manteiga e parmesão, mexa até ficar cremoso.",
    ],
  },
  {
    id: 7,
    titulo: "Mousse de Chocolate Cremosa",
    categoria: "Sobremesas",
    dificuldade: "Fácil",
    tempo: "30 min",
    porcoes: "6 porções",
    imagem:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&h=350&fit=crop",
    descricao:
      "Uma sobremesa francesa clássica que derrete na boca! Esta mousse de chocolate combina a intensidade do chocolate meio amargo com uma textura incrivelmente leve e aerada. O segredo está na técnica de incorporar delicadamente as claras em neve, criando uma experiência celestial que agrada desde crianças até os paladares mais exigentes. Irresistível!",
    ingredientes: [
      "200g de chocolate meio amargo",
      "3 ovos (claras e gemas separadas)",
      "2 colheres de açúcar",
      "200ml de creme de leite fresco",
      "1 colher de essência de baunilha",
    ],
    preparo: [
      "Derreta o chocolate em banho-maria e deixe esfriar.",
      "Bata as claras em neve com o açúcar até formar picos firmes.",
      "Misture as gemas ao chocolate derretido.",
      "Incorpore delicadamente as claras e o creme de leite.",
      "Leve à geladeira por no mínimo 3 horas antes de servir.",
    ],
  },
  {
    id: 8,
    titulo: "Salada Caesar com Frango Grelhado",
    categoria: "Saladas",
    dificuldade: "Fácil",
    tempo: "30 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=350&fit=crop",
    descricao:
      "Uma das saladas mais famosas do mundo, e não é à toa! Folhas crocantes de alface romana, frango grelhado suculento, croutons crocantes e lascas generosas de parmesão, tudo regado com o icônico molho Caesar cremoso. É aquela refeição leve mas satisfatória, perfeita para o almoço ou jantar. Equilibrada, saborosa e sempre bem-vinda!",
    ingredientes: [
      "2 peitos de frango",
      "1 pé de alface romana",
      "100g de parmesão em lascas",
      "Croutons",
      "Molho Caesar",
      "Suco de limão",
    ],
    preparo: [
      "Tempere o frango com sal, pimenta e limão. Grelhe até dourar.",
      "Corte a alface em pedaços médios e lave bem.",
      "Fatie o frango grelhado.",
      "Monte a salada com alface, frango, croutons e parmesão.",
      "Finalize com molho Caesar e sirva imediatamente.",
    ],
  },
  {
    id: 9,
    titulo: "Pão de Queijo Caseiro",
    categoria: "Café da Manhã",
    dificuldade: "Fácil",
    tempo: "50 min",
    porcoes: "20 unidades",
    imagem:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?w=500&h=350&fit=crop",
    descricao:
      "O orgulho de Minas Gerais! Estes pãezinhos de queijo são irresistíveis: crocantes por fora, macios e aerados por dentro, com aquele sabor inconfundível de queijo minas. Fresquinhos do forno, são perfeitos para o café da manhã ou lanche da tarde. O segredo está na técnica de escaldamento do polvilho. Impossível comer apenas um!",
    ingredientes: [
      "500g de polvilho azedo",
      "200ml de leite",
      "100ml de óleo",
      "2 ovos",
      "200g de queijo minas ralado",
      "Sal a gosto",
    ],
    preparo: [
      "Ferva o leite com óleo e sal. Despeje sobre o polvilho e misture.",
      "Deixe esfriar e adicione os ovos um a um.",
      "Acrescente o queijo ralado e misture bem.",
      "Faça bolinhas e disponha em assadeira untada.",
      "Asse em forno preaquecido a 180°C por 30-35 minutos.",
    ],
  },
  {
    id: 10,
    titulo: "Sopa de Legumes Massa Caseira",
    categoria: "Sopas",
    dificuldade: "Fácil",
    tempo: "40 min",
    porcoes: "6 porções",
    imagem:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&h=350&fit=crop",
    descricao:
      "O conforto em forma de sopa! Repleta de legumes frescos e coloridos cozidos no ponto certo, com macarrãozinho que deixa tudo ainda mais gostoso. É aquela receita que aquece o corpo e a alma, perfeita para dias frios ou quando você precisa de algo leve e nutritivo. O caldo aromático é resultado do cozimento lento dos vegetais. Pura nostalgia!",
    ingredientes: [
      "2 cenouras em cubos",
      "2 batatas em cubos",
      "1 abobrinha",
      "100g de vagem",
      "200g de macarrão",
      "1,5 litros de caldo de legumes",
      "Temperos a gosto",
    ],
    preparo: [
      "Refogue cebola e alho em um fio de azeite.",
      "Adicione os legumes e refogue por 5 minutos.",
      "Acrescente o caldo e deixe cozinhar por 20 minutos.",
      "Adicione o macarrão e cozinhe até ficar al dente.",
      "Ajuste o sal e sirva quente com salsinha picada.",
    ],
  },
  {
    id: 11,
    titulo: "Moqueca Capixaba Vegana",
    categoria: "Vegano",
    dificuldade: "Médio",
    tempo: "50 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1604152135912-04a022e23696?w=500&h=350&fit=crop",
    descricao:
      "Prova de que comida vegana pode ser cheia de sabor! Esta versão plant-based da tradicional moqueca capixaba usa palmito como protagonista, combinado com legumes frescos, leite de coco cremoso e o inconfundível azeite de dendê. Cozinhada lentamente em panela de barro, absorve todos os aromas e temperos. Servida com arroz, é uma explosão de sabores tropicais!",
    ingredientes: [
      "500g de palmito em rodelas",
      "2 tomates maduros",
      "1 pimentão vermelho",
      "1 cebola grande",
      "200ml de leite de coco",
      "Coentro fresco",
      "Azeite de dendê, sal e pimenta",
    ],
    preparo: [
      "Em uma panela de barro, refogue a cebola e pimentão.",
      "Adicione os tomates picados e o palmito.",
      "Tempere com sal, pimenta e coentro.",
      "Acrescente o leite de coco e o azeite de dendê.",
      "Cozinhe em fogo baixo por 25 minutos. Sirva com arroz.",
    ],
  },
  {
    id: 12,
    titulo: "Torta de Frango com Requeijão",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "50 min",
    porcoes: "8 porções",
    imagem:
      "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=500&h=350&fit=crop",
    descricao:
      "A torta que salva qualquer almoço! Massa fofinha e dourada abraçando um recheio cremoso de frango desfiado com requeijão. É prática, deliciosa e rende bastante - perfeita para reuniões de família ou para congelar porções. O segredo está em não abrir o forno antes do tempo para garantir que a massa cresça uniformemente. Um verdadeiro curinga na cozinha!",
    ingredientes: [
      "500g de frango cozido e desfiado",
      "200g de requeijão",
      "3 ovos",
      "2 xícaras de leite",
      "2 xícaras de farinha de trigo",
      "100ml de óleo",
      "1 colher de fermento",
    ],
    preparo: [
      "Tempere o frango desfiado com sal, cebola e alho.",
      "Bata no liquidificador ovos, leite, óleo e farinha.",
      "Adicione o fermento e misture delicadamente.",
      "Em forma untada, despeje metade da massa, o recheio e cubra com o resto.",
      "Asse a 180°C por 35-40 minutos até dourar.",
    ],
  },
  {
    id: 13,
    titulo: "Bolo de Cenoura com Cobertura de Chocolate",
    categoria: "Sobremesas",
    dificuldade: "Fácil",
    tempo: "60 min",
    porcoes: "12 porções",
    imagem:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=350&fit=crop",
    descricao:
      "O bolo mais amado do Brasil! Massa super fofinha com o toque adocicado da cenoura, coberto por uma camada generosa de brigadeiro de chocolate que escorre pelas laterais. É impossível resistir a uma (ou duas) fatias! O liquidificador faz todo o trabalho, tornando esta receita perfeita até para iniciantes. Sucesso absoluto em qualquer ocasião!",
    ingredientes: [
      "3 cenouras médias",
      "3 ovos",
      "1 xícara de óleo",
      "2 xícaras de açúcar",
      "2 xícaras de farinha de trigo",
      "1 colher de fermento",
      "200g de chocolate para cobertura",
    ],
    preparo: [
      "Bata no liquidificador cenouras, ovos e óleo.",
      "Despeje em uma tigela, adicione açúcar e farinha peneirada.",
      "Misture o fermento por último.",
      "Despeje em forma untada e asse a 180°C por 40 minutos.",
      "Derreta o chocolate com creme de leite e cubra o bolo frio.",
    ],
  },
  {
    id: 14,
    titulo: "Escondidinho de Carne Seca",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "60 min",
    porcoes: "6 porções",
    imagem:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=350&fit=crop",
    descricao:
      "Um clássico da culinária nordestina que conquista corações em todo o Brasil! Camadas generosas de purê de mandioca cremoso escondem um recheio suculento de carne seca desfiada e refogada. Gratinado com queijo derretido até formar uma crosta dourada irresistível. É aquele prato que pede uma porção extra e rende elogios à mesa. Perfeito para almoços em família!",
    ingredientes: [
      "500g de carne seca dessalgada",
      "1kg de mandioca",
      "200ml de leite",
      "100g de manteiga",
      "200g de queijo mussarela",
      "Cebola e alho",
    ],
    preparo: [
      "Cozinhe e desfie a carne seca. Refogue com cebola e alho.",
      "Cozinhe a mandioca até ficar macia.",
      "Amasse a mandioca com leite e manteiga até formar um purê.",
      "Em um refratário, coloque metade do purê, a carne e cubra com o resto.",
      "Finalize com queijo e leve ao forno para gratinar.",
    ],
  },
  {
    id: 15,
    titulo: "Brownie Vegano de Cacau",
    categoria: "Vegano",
    dificuldade: "Fácil",
    tempo: "30 min",
    porcoes: "12 porções",
    imagem:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&h=350&fit=crop",
    descricao:
      "Quem disse que brownie vegano não pode ser incrível? Este aqui é denso, úmido, intensamente chocolatudo e absolutamente viciante! Feito sem nenhum ingrediente de origem animal, mas com todo o sabor que você espera de um brownie de verdade. Os pedaços de chocolate derretido espalhados pela massa são o toque final. Veganos e não-veganos vão se apaixonar!",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "1 xícara de açúcar demerara",
      "1/2 xícara de cacau em pó",
      "1/2 xícara de óleo de coco",
      "1 xícara de água",
      "1 colher de fermento",
      "Chocolate vegano picado",
    ],
    preparo: [
      "Misture os ingredientes secos em uma tigela.",
      "Adicione o óleo e a água, mexendo até obter uma massa homogênea.",
      "Acrescente pedaços de chocolate vegano.",
      "Despeje em forma untada e asse a 180°C por 20-25 minutos.",
      "Não asse demais para manter a textura úmida.",
    ],
  },
  {
    id: 16,
    titulo: "Strogonoff de Camarão",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "30 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=500&h=350&fit=crop",
    descricao:
      "Uma versão sofisticada do tradicional strogonoff brasileiro, agora com camarões suculentos! Este prato combina a cremosidade do molho clássico com a delicadeza dos frutos do mar. Os champignons adicionam uma camada extra de sabor, enquanto o creme de leite garante aquela textura aveludada. Perfeito para um jantar romântico ou para impressionar os convidados.",
    ingredientes: [
      "500g de camarões limpos",
      "1 cebola picada",
      "2 dentes de alho",
      "200g de champignon",
      "200ml de creme de leite",
      "2 colheres de ketchup",
      "Mostarda e sal",
    ],
    preparo: [
      "Refogue o alho e cebola, adicione os camarões temperados.",
      "Cozinhe por 5 minutos e reserve os camarões.",
      "Na mesma panela, adicione champignon, ketchup e mostarda.",
      "Acrescente o creme de leite e misture bem.",
      "Volte os camarões à panela, aqueça e sirva com arroz.",
    ],
  },
  {
    id: 17,
    titulo: "Risoto de Cogumelos Selvagens",
    categoria: "Pratos Principais",
    dificuldade: "Médio",
    tempo: "45 min",
    porcoes: "4 porções",
    imagem:
      "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&h=350&fit=crop",
    descricao:
      "Para os verdadeiros apreciadores! Este risoto elevado usa cogumelos premium - shiitake frescos e porcini secos hidratados - que conferem uma profundidade de sabor incomparável. Preparado com técnica italiana autêntica, mexendo pacientemente até atingir o ponto 'all'onda' perfeito. Finalizado com parmesão envelhecido e manteiga, é pura sofisticação no prato. Restaurante em casa!",
    ingredientes: [
      "300g de arroz arbóreo",
      "200g de cogumelos shiitake",
      "100g de cogumelos porcini secos",
      "1 litro de caldo de legumes",
      "100ml de vinho branco seco",
      "80g de parmesão",
      "Manteiga e cebola",
    ],
    preparo: [
      "Hidrate os cogumelos porcini em água quente por 20 minutos.",
      "Refogue a cebola, adicione o arroz e torre levemente.",
      "Adicione o vinho e deixe evaporar.",
      "Acrescente o caldo aos poucos, mexendo constantemente.",
      "Adicione os cogumelos refogados, finalize com manteiga e parmesão.",
    ],
  },
];

// Função para buscar receitas por termo
function buscarReceitas(termo) {
  if (!termo) return receitasData;

  termo = termo.toLowerCase();
  return receitasData.filter(
    (receita) =>
      receita.titulo.toLowerCase().includes(termo) ||
      receita.categoria.toLowerCase().includes(termo) ||
      receita.ingredientes.some((ing) => ing.toLowerCase().includes(termo))
  );
}

// Função para obter receita por ID
function obterReceitaPorId(id) {
  return receitasData.find((receita) => receita.id === parseInt(id));
}

// Função para obter receitas por categoria
function obterReceitasPorCategoria(categoria) {
  if (categoria === "Todas as Categorias") return receitasData;
  return receitasData.filter((receita) => receita.categoria === categoria);
}

// Função para obter todas as categorias únicas
function obterCategorias() {
  const categorias = [...new Set(receitasData.map((r) => r.categoria))];
  return categorias.sort();
}
