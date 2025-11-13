import db from "../config/db.js";

const CategoryModel = {
  //criar nova categoria
  create: async (categoryData) => {
    const { nome, descricao } = categoryData;
    const query = "INSERT INTO categoria (nome, descricao) VALUES (? , ?)";

    const [result] = await db.execute(query, [nome, descricao]);
    return { id: result.insertId, ...categoryData };
  },

  //listar todas categorias
  findAll: async () => {
    const query = "SELECT * FROM categoria";
    const [rows] = await db.execute(query);
    return rows;
  },

  // buscar categoria por id
  findById: async (id) => {
    const query = "SELECT * FROM categoria WHERE id_categoria = ?";
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  },
};

export default CategoryModel;
