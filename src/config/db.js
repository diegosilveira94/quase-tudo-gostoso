import mysql from "mysql2/promise";

// Adicione este log para debug
console.log("🔍 Variáveis de ambiente:");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_NAME:", process.env.DB_NAME);

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Teste a conexão
db.getConnection()
  .then((connection) => {
    console.log("✅ Conectado ao MySQL com sucesso!");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao MySQL:", err.message);
  });

export default db;
