export default function Footer() {
  return (
    <footer className="bg-white border-t border-orange-100 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-4">
        {/* Logo e descrição */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-orange-400 to-lime-500 flex items-center justify-center">
              <span className="text-white text-lg">👨‍🍳</span>
            </div>
            <span className="font-semibold text-gray-900">
              Quase Tudo Gostoso
            </span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Sua fonte de inspiração culinária com as melhores receitas do mundo.
          </p>
        </div>

        {/* Colunas de links */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Receitas
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Café da Manhã</li>
            <li>Almoço</li>
            <li>Jantar</li>
            <li>Sobremesas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Empresa
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Sobre Nós</li>
            <li>Blog</li>
            <li>Contato</li>
            <li>Carreiras</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Redes Sociais
          </h3>
          <div className="flex gap-3">
            {["f", "📸", "🐦"].map((icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-sm text-gray-700"
              >
                {icon === "f" ? "f" : icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-orange-100 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Quase Tudo Gostoso. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
