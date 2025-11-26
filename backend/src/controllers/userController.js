import UserModel from "../models/userModel.js";

export const cadastrarUsuario = async (req, res) => {
  try {
    const { nome, email, senha, dataNascimento, cep, genero } = req.body;

    // validação básica
    if (!nome || !email || !senha) {
      return res
        .status(400)
        .json({ erro: "Nome, email e senha são obrigatórios!" });
    }

    // validação opcional do CEP (somente números)
    if (cep && !/^[0-9]+$/.test(String(cep))) {
      return res
        .status(400)
        .json({ erro: "CEP inválido. Use apenas números." });
    }

    const usuario = await UserModel.create({
      nome,
      email,
      senha,
      dataNascimento,
      cep,
      genero,
    });

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
      usuario: { id: usuario.id, nome, email },
    });
  } catch (erro) {
    console.error("Erro ao cadastrar usuário:", erro);
    res.status(500).json({ erro: erro.message || "Erro ao cadastrar usuário" });
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

export const loginUsuario = async (req, res) => {
  try {
    const { email, senha } = req.body;

    // Validação básica
    if (!email || !senha) {
      return res.status(400).json({ erro: "Email e senha são obrigatórios!" });
    }

    // Buscar usuário pelo email
    const usuario = await UserModel.findOne({ where: { email } });

    if (!usuario) {
      return res.status(401).json({ erro: "Email ou senha incorretos!" });
    }

    // Verificar senha (comparação simples - sem hash para nível acadêmico)
    if (usuario.senha !== senha) {
      return res.status(401).json({ erro: "Email ou senha incorretos!" });
    }

    // Login bem-sucedido
    res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
      },
    });
  } catch (erro) {
    console.error("Erro ao realizar login:", erro);
    res.status(500).json({ erro: "Erro ao realizar login" });
  }
};
