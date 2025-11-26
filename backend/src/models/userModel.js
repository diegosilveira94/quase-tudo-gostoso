import db from "../config/db.js";

const UserModel = {
  //criar novo usuario
  async create(userData) {
    const { nome, email, senha, dataNascimento, cep, genero } = userData;
    // A tabela `usuario` possui colunas `salt` e `uuid` que exigem
    // valores não nulos segundo o script SQL original. Aqui preenchemos
    // `salt` com string vazia e `uuid` com NULL quando não fornecidos.
    const salt = userData.salt || "";
    const uuid = userData.uuid || null;

    const query =
      "INSERT INTO usuario (nome, email, senha, salt, uuid, data_nascimento, cep, genero) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

    const [result] = await db.execute(query, [
      nome,
      email,
      senha,
      salt,
      uuid,
      dataNascimento,
      cep || null,
      genero || null,
    ]);
    return { id: result.insertId, ...userData };
  },

  // listar todos os usuarios
  findAll: async () => {
    const query = "SELECT * FROM usuario";
    const [rows] = await db.execute(query);
    return rows;
  },

  // buscar usuario por email
  findByEmail: async (email) => {
    const query = "SELECT * FROM usuario WHERE email = ?";
    const [rows] = await db.execute(query, [email]);
    return rows[0];
  },
  // buscar usuario por id
  findById: async (id) => {
    const query = "SELECT * FROM usuario WHERE idusuario = ?";
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },

  // buscar usuario com condições personalizadas
  findOne: async (options) => {
    const { where } = options;

    if (!where) {
      throw new Error("Parâmetro 'where' é obrigatório para findOne");
    }

    // Construir query dinamicamente baseada nas condições
    const conditions = Object.keys(where);
    const values = Object.values(where);

    const whereClause = conditions.map((col) => `${col} = ?`).join(" AND ");
    const query = `SELECT * FROM usuario WHERE ${whereClause}`;

    const [rows] = await db.execute(query, values);
    return rows[0];
  },
};

export default UserModel;
