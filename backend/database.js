import mysql from "mysql2";

// configuração da conexão
const connection = mysql.createConnection({
  //cria uma conexão com o banco de dados
  host: "localhost", // endereco do servidor do banco
  port: 3306, // port utilizada no xampp
  user: "root", // usuario do mysql
  password: "", // senha do usuario mysql
  database: "quasetudogostoso", // nome do banco criado
});

// teste conexão
connection.connect((erro) => {
  //efetiva a conexão e executa um callback
  if (erro) {
    console.log("Erro ao conectar ao banco: ", erro);
    return;
  }
  console.log("Conectado ao banco de dados!");
});

export default connection;
