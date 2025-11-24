import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <article className="bg-white rounded-3xl shadow-sm border border-orange-100 overflow-hidden flex flex-col">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={recipe.imagem}
          alt={recipe.titulo}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900 mb-1">
          {recipe.titulo}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {recipe.descricao}
        </p>

        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <span className="inline-flex items-center gap-1">
            <span>⏱</span>
            {recipe.tempoPreparo}
          </span>
          <span className="inline-flex items-center gap-1">
            <span>🥣</span>
            {recipe.dificuldade}
          </span>
          {recipe.custo && (
            <span className="inline-flex items-center gap-1">
              <span>💰</span>
              {recipe.custo}
            </span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-xs font-medium text-gray-500">
            {recipe.categoriaPrincipal || "Receita"}
          </span>
          <Link
            to={`/receitas/${recipe.idreceita}`}
            className="text-sm text-orange-600 font-semibold hover:text-orange-500"
          >
            Ver detalhes
          </Link>
        </div>
      </div>
    </article>
  );
}
