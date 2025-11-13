import MealModel from "../models/mealModel.js";

export const cadastrarRefeicao = async (req, res) => {
  try {
    const { nome, descricao } = req.body;

    if (!nome) {
      return res.status(400).json({
        erro: "O nome da refeição é obrigatório!",
      });
    }

    const refeicao = await MealModel.create({ nome, descricao });

    res.status(201).json({
      mensagem: "Refeição cadastrada com sucesso!",
      refeicao,
    });
  } catch (erro) {
    console.error("Erro ao cadastrar refeição:", erro);
    res.status(500).json({ erro: "Erro ao cadastrar refeição" });
  }
};

export const listarRefeicoes = async (req, res) => {
  try {
    const refeicoes = await MealModel.findAll();
    res.status(200).json(refeicoes);
  } catch (erro) {
    console.error("Erro ao listar refeições:", erro);
    res.status(500).json({ erro: "Erro ao listar refeições" });
  }
};
