import mysql from "mysql2/promise";

export async function testarConexaoDB(req, res) {
  let conexao = null;

  try {
    const { host, user, password, database, port } = req.body;

    // Validar campos obrigatórios
    if (!host || !user || !database) {
      return res.status(400).json({
        sucesso: false,
        erro: "Host, usuário e banco de dados são obrigatórios",
      });
    }

    // Tentar conectar ao banco de dados com timeout
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Timeout na conexão (30s)")), 30000)
    );

    const conexaoPromise = mysql.createConnection({
      host: host,
      user: user,
      password: password || "",
      database: database,
      port: port || 3306,
      waitForConnections: true,
      connectionLimit: 1,
      queueLimit: 0,
      connectTimeout: 10000,
    });

    conexao = await Promise.race([conexaoPromise, timeoutPromise]);

    // Testar a conexão com uma query simples
    await conexao.ping();

    // Fechar a conexão
    await conexao.end();

    return res.status(200).json({
      sucesso: true,
      mensagem: `Conexão estabelecida com sucesso ao banco '${database}'`,
    });
  } catch (error) {
    console.error("Erro ao conectar:", error.message);

    // Fechar a conexão se existir
    if (conexao) {
      try {
        await conexao.end();
      } catch (e) {
        console.error("Erro ao fechar conexão:", e.message);
      }
    }

    return res.status(500).json({
      sucesso: false,
      erro: `Erro ao conectar: ${error.message}`,
    });
  }
}
