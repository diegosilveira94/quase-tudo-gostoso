import UserModel from "../models/userModel.js";

export const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, dataNascimento } = req.body;

    //validação
    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ erro: "Todos os campos obrigatórios devem ser preenchidos!" });
    }

    const usuario = await UserModel.create({
      nome,
      email,
      senha,
      dataNascimento,
    });
    resizeTo
      .status(201)
      .json({ mensagem: "Usuário cadastrado com sucesso!", usuario });
  } catch (erro) {
    console.error("Erro ao cadastrar usuário:", erro);
    res.status(500).json({ erro: "Erro ao cadastrar usuário" });
  }
};
