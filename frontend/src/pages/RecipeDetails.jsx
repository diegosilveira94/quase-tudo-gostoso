import { useParams, Link } from "react-router-dom";
import { receitas } from "../data/recipes.js";

export default function RecipeDetails() {
  const { id } = useParams();
  const receita = receitas.find((r) => String(r.idreceita) === String(id));

  if (!receita) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <p className="text-red-500 mb-4">Receita não encontrada.</p>
        <Link to="/receitas" className="text-orange-600 font-semibold">
          Voltar para receitas
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <Link
        to="/receitas"
        className="text-sm text-orange-600 hover:text-orange-500 font-semibold"
      >
        &larr; Voltar
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
        {receita.titulo}
      </h1>
      <p className="text-gray-600 mb-4">{receita.descricao}</p>

      <div className="rounded-xl overflow-hidden mb-6">
        <img
          src={receita.imagem}
          alt={receita.titulo}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-6 text-sm">
        <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700">
          Dificuldade: {receita.dificuldade}
        </span>
        <span className="px-3 py-1 rounded-full bg-lime-50 text-lime-700">
          Tempo: {receita.tempoPreparo}
        </span>
        <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700">
          Custo: {receita.custo}
        </span>
      </div>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Ingredientes
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          {receita.ingredientes.map((ing, idx) => (
            <li key={idx}>
              {ing.nome} – {ing.quantidade} {ing.dosagem}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Modo de preparo
        </h2>
        <ol className="list-decimal list-inside text-gray-700 text-sm space-y-1">
          {receita.preparo.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Comentários
        </h2>
        {receita.comentarios.length === 0 ? (
          <p className="text-gray-500 text-sm">
            Ainda não há comentários para esta receita.
          </p>
        ) : (
          <ul className="space-y-2">
            {receita.comentarios.map((c, idx) => (
              <li
                key={idx}
                className="bg-white border border-gray-100 rounded-lg p-3 text-sm"
              >
                <p className="font-semibold text-gray-800">{c.usuario}</p>
                <p className="text-gray-600">{c.comentario}</p>
                <p className="text-xs text-yellow-600 mt-1">
                  Nota: {c.nota}/5
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
