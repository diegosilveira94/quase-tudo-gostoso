import express from "express";
import dotenv from "dotenv";
dotenv.config(); //carregar .env antes de importar as rotas
import router from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../frontend"));

//nas rotas ter prefixo /api
app.use("/api", router);

//raiz
app.get("/", (req, res) => {
  res.send("Servidor Quase Tudo Gostoso rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
