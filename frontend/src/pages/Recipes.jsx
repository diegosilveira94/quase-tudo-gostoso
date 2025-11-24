import { useState } from "react";
import RecipeCard from "../components/RecipeCard.jsx";
import { receitas } from "../data/recipes.js";

export default function Recipes() {
  const [filtroTexto, setFiltroTexto] = useState("");
  const [filtroDificuldade, setFiltroDificuldade] = useState("todos");

  const filtradas = receitas.filter((r) => {
    const matchTexto =
      r.titulo.toLowerCase().includes(filtroTexto.toLowerCase()) ||
      r.descricao.toLowerCase().includes(filtroTexto.toLowerCase());

    const matchDificuldade =
      filtroDificuldade === "todos" ||
      r.dificuldade.toLowerCase() === filtroDificuldade;

    return matchTexto && matchDificuldade;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Todas as receitas
      </h1>

      {/* Filtros */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-col md:flex-row gap-4 md:items-end">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Buscar
          </label>
          <input
            type="text"
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
            placeholder="Digite um nome ou ingrediente..."
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Dificuldade
          </label>
          <select
            value={filtroDificuldade}
            onChange={(e) => setFiltroDificuldade(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="todos">Todas</option>
            <option value="fácil">Fácil</option>
            <option value="médio">Médio</option>
            <option value="difícil">Difícil</option>
          </select>
        </div>
      </div>

      {/* Lista */}
      {filtradas.length === 0 ? (
        <p className="text-gray-500 text-sm">
          Nenhuma receita encontrada com esses filtros.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtradas.map((r) => (
            <RecipeCard key={r.idreceita} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
