import UserModel from "../models/userModel.js";

export const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, dataNascimento } = req.body;

    //validação
    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ erro: "Nome, email e senha são obrigatórios!" });
    }

    const usuario = await UserModel.create({
      nome,
      email,
      senha,
      dataNascimento,
    });

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
      usuario: { id: usuario.id, nome, email },
    });
  } catch (erro) {
    console.error("Erro ao cadastrar usuário:", erro);
    res.status(500).json({ erro: "Erro ao cadastrar usuário" });
  }
};

export const listarUsuarios = async (req, res) => {
  try {
    const usuarios = await UserModel.findAll();
    res.status(200).json(usuarios);
  } catch (erro) {
    console.log("Erro ao listar usuários", erro);
    res.status(500).json({ erro: "Erro ao listar usuários " });
  }
};
