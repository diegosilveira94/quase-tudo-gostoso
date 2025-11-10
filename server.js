import express from "express";
import db from "./database.js"; // importa conexao do banco
const app = express(); // cria uma instância da aplicação express
const PORT = 3000; // define a porta onde o servidor vai escutar

// middleware para processar dados de formulários
app.use(express.urlencoded({ extended: true }));

// middleware para processar JSON (uso do fetch/axios)
app.use(express.json());

// servir html
app.use(express.static("../frontend"));

// rota de teste simples
app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

// rota para cadastrar usuario
app.post("/cadastrar-usuario", (req, res) => {
  const { nome, email, senha } = req.body; // implementar os dados enviados do formulário

  // validações
  if (!nome || !email || !senha) {
    return res.status(400).send("Todos os campos são obrigatórios!");
  }
  // query sql pra inserir dados
  const sql = "INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)";

  // executa query
  db.query(sql, [nome, email, senha], (erro, resultado) => {
    if (erro) {
      console.error("Erro ao inserir: ", erro);
      return res.status(500).send("Erro ao cadastrar usuário");
    }

    console.log("Usuário inserido com ID: ", resultado.insertId);
    res.send("Usuário cadastrado com sucesso!");
  });
});

// inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
