export const receitas = [
  {
    idreceita: 1,
    titulo: "Lasanha à Bolonhesa",
    descricao: "Uma lasanha clássica com molho bolonhesa e muito queijo.",
    imagem:
      "https://images.unsplash.com/photo-1604908176997-1251884b08a2?auto=format&fit=crop&w=800&q=80",
    dificuldade: "Médio",
    custo: "R$ 30–40",
    tempoPreparo: "60 min",
    categoriaPrincipal: "Massas",
    ingredientes: [
      { nome: "Massa para lasanha", quantidade: 500, dosagem: "g" },
      { nome: "Carne moída", quantidade: 400, dosagem: "g" },
      { nome: "Queijo muçarela", quantidade: 300, dosagem: "g" },
    ],
    preparo: [
      "Refogue a carne com temperos.",
      "Monte as camadas de massa, molho e queijo.",
      "Leve ao forno até gratinar.",
    ],
    comentarios: [
      {
        usuario: "Ana",
        comentario: "Ficou perfeita, minha família amou!",
        nota: 5,
      },
    ],
  },
  {
    idreceita: 2,
    titulo: "Salada Caesar",
    descricao: "Salada leve com alface, croutons e molho especial.",
    imagem:
      "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
    dificuldade: "Fácil",
    custo: "R$ 10–15",
    tempoPreparo: "20 min",
    categoriaPrincipal: "Saladas",
    ingredientes: [
      { nome: "Alface", quantidade: 1, dosagem: "unidade" },
      { nome: "Croutons", quantidade: 100, dosagem: "g" },
      { nome: "Molho Caesar", quantidade: 100, dosagem: "ml" },
    ],
    preparo: [
      "Lave e corte a alface.",
      "Misture com o molho.",
      "Finalize com os croutons.",
    ],
    comentarios: [],
  },
];
