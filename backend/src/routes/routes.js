import express from "express";
import {
  cadastrarUsuario,
  listarUsuarios,
} from "../controllers/userController.js";
import {
  cadastrarCategoria,
  listarCategorias,
} from "../controllers/categoryController.js";
import {
  cadastrarRefeicao,
  listarRefeicoes,
} from "../controllers/mealController.js";
import { testarConexaoDB } from "../controllers/conexaoController.js";

const router = express.Router();

//rotas de conexão ao banco de dados
router.post("/conexao/testar", testarConexaoDB);

//rotas usuários
router.post("/cadastrar-usuario", cadastrarUsuario);
router.get("/usuarios", listarUsuarios);

//rotas categoria
router.post("/cadastrar-categoria", cadastrarCategoria);
router.get("/categorias", listarCategorias);

//rotas refeição
router.post("/cadastrar-refeicao", cadastrarRefeicao);
router.get("/refeicoes", listarRefeicoes);

export default router;
