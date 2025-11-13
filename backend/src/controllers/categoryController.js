import CategoryModel from "../models/categoryModel.js";

export const cadastrarCategoria = async (req, res) => {
  try {
    const { nome, descricao } = req.body;

    if (!nome) {
      return res.status(400).json({
        erro: "O nome da categoria é obrigatório!",
      });
    }

    const categoria = await CategoryModel.create({ nome, descricao });

    res.status(201).json({
      mensagem: "Categoria cadastrada com sucesso!",
      categoria,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar categoria:", erro);
    res.status(500).json({ erro: "Erro ao cadastrar categoria" });
  }
};

export const listarCategorias = async (req, res) => {
  try {
    const categorias = await CategoryModel.findAll();
    res.status(200).json(categorias);
  } catch (erro) {
    console.error("Erro ao listar categorias:", erro);
    res.status(500).json({ erro: "Erro ao listar categorias" });
  }
};
