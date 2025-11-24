import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard.jsx";
import { receitas } from "../data/recipes.js";

export default function Home() {
  const destaque = receitas[0];
  const outras = receitas.slice(0, 4);

  return (
    <div className="pb-12">
      {/* HERO */}
      <section className="relative">
        {/* Imagem de fundo */}
        <div
          className="h-[420px] md:h-[520px] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1514996937319-344454492b37?auto=format&fit=crop&w=1400&q=80')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/55" />

        {/* Conteúdo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-3xl mx-auto px-4 text-center text-white">
            {/* Pill topo */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/15 border border-white/40 backdrop-blur mb-6 text-sm">
              ✨ Descubra sabores autênticos
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
              Receitas que Inspiram
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-8">
              Milhares de receitas deliciosas testadas e aprovadas por chefs e
              entusiastas da culinária.
            </p>

            {/* Barra de busca */}
            <div className="max-w-2xl mx-auto bg-white rounded-full shadow-xl flex items-center overflow-hidden">
              <span className="pl-4 text-gray-400 text-lg">🔍</span>
              <input
                type="text"
                placeholder="Busque por receitas, ingredientes..."
                className="flex-1 px-3 py-3 text-sm md:text-base border-none outline-none bg-transparent text-gray-800"
              />
              <button className="px-6 md:px-8 py-3 bg-orange-500 text-white text-sm md:text-base font-semibold rounded-full m-1 hover:bg-orange-400 transition">
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="-mt-10 md:-mt-14 relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-orange-100 px-6 py-6 md:py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900">
              1,234
            </div>
            <p className="text-sm text-gray-500 mt-1">Receitas Exclusivas</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900">
              45,678
            </div>
            <p className="text-sm text-gray-500 mt-1">
              Chefs e Entusiastas
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-semibold text-gray-900">
              8,910
            </div>
            <p className="text-sm text-gray-500 mt-1">Avaliações Positivas</p>
          </div>
        </div>
      </section>

      {/* RECEITAS EM DESTAQUE */}
      <section className="mt-12 bg-orange-50/60 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Receitas em Destaque
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              As receitas mais populares da semana
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {outras.map((r) => (
              <RecipeCard key={r.idreceita} recipe={r} />
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS (fake simples, só pra layout) */}
      <section className="mt-10 bg-orange-50 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-lg md:text-xl font-semibold text-gray-900">
              Explore por Categoria
            </h2>
            <p className="text-sm md:text-base text-gray-600 mt-2">
              Encontre receitas para cada momento do seu dia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              "Café da Manhã",
              "Massas & Pizzas",
              "Saladas",
              "Sobremesas",
              "Sopas",
              "Lanches",
            ].map((nome) => (
              <div
                key={nome}
                className="bg-white rounded-3xl shadow-sm border border-orange-100 px-3 py-4 text-center text-sm text-gray-700"
              >
                <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-orange-50 flex items-center justify-center">
                  <span>🍽️</span>
                </div>
                <p className="font-medium">{nome}</p>
                <p className="text-xs text-gray-500 mt-1">124 receitas</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mt-10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-br from-orange-400 to-lime-500 text-white px-6 md:px-10 py-10 shadow-lg">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✉️</span>
            </div>
            <h2 className="text-center text-lg md:text-xl font-semibold mb-2">
              Receba Receitas Semanais
            </h2>
            <p className="text-center text-sm md:text-base text-white/90 mb-6">
              Inscreva-se e receba as melhores receitas direto no seu e-mail
              toda semana.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="max-w-xl mx-auto bg-white rounded-full flex items-center overflow-hidden"
            >
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 text-sm md:text-base text-gray-800 border-none outline-none"
              />
              <button className="px-6 md:px-8 py-3 bg-gray-900 text-white text-sm md:text-base font-semibold rounded-full m-1 hover:bg-gray-800 transition">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
