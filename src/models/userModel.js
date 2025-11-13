import db from "../config/db.js";

const UserModel = {
  //criar novo usuario
  async create(userData) {
    const { nome, email, senha, dataNascimento } = userData;
    const query =
      "INSERT INTO users (nome, email, senha, data_nascimento) VALUES (?, ?, ?, ?)";

    const [result] = await db.execute(query, [
      nome,
      email,
      senha,
      dataNascimento,
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
    const query = "SELECT * FROM usuario WHERE id_usuario = ?";
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },
};

export default UserModel;
