import "dotenv/config";
import fs from "fs";
import mysql from "mysql2/promise";

async function setupDatabase() {
  let connection;

  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      multipleStatements: true,
    });

    console.log(">> Conectado ao MySQL <<");

    const sqlPath = new URL("../../sql/createQTG.sql", import.meta.url);
    const sqlScript = fs.readFileSync(sqlPath, "utf8");

    console.log("Executando script SQL...");
    await connection.query(sqlScript);

    console.log("Banco de dados criado com sucesso...");
    console.log("Tabelas criadas com sucesso...");
    console.log("");
    console.log("Inicie o projeto -> yarn start");
  } catch (error) {
    console.error("Erro ao criar banco de dados...", error.message);
    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

setupDatabase();
