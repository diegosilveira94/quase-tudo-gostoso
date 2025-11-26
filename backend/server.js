import "dotenv/config";
import express from "express";
import cors from "cors";
import router from "./src/routes/routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração CORS simples para desenvolvimento local
app.use(
  cors({
    origin: [
      "http://127.0.0.1:5500",
      "http://localhost:5500",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

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
