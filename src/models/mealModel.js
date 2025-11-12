import db from "../config/db";

const MealModel = {
  // Criar novo tipo de refeição
  create: async (mealData) => {
    const { nome, descricao } = mealData;
    const query = "INSERT INTO refeicao (nome, descricao) VALUES (?, ?)";

    const [result] = await db.execute(query, [nome, descricao]);
    return { id: result.insertId, ...mealData };
  },

  // listar todos os tipos de refeição
  findAll: async () => {
    const query = "SELECT * FROM refeicao";
    const [rows] = await db.execute(query);
    return rows;
  },

  // Buscar refeição por ID
  findById: async (id) => {
    const query = "SELECT * FROM refeicao WHERE id_refeicao = ?";
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },
};

export default MealModel;
