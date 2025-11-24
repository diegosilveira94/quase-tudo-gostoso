import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const baseLink =
    "text-sm md:text-base text-gray-700 hover:text-orange-600 transition-colors";

  return (
    <header className="bg-white/95 backdrop-blur shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-400 to-lime-500 flex items-center justify-center">
            <span className="text-white text-xl">👨‍🍳</span>
          </div>
          <span className="text-lg md:text-xl font-semibold text-gray-900">
            Quase Tudo Gostoso
          </span>
        </Link>

        {/* Links centrais (desktop) */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "text-orange-600 font-semibold" : ""}`
              }
            >
              Receitas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/receitas"
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "text-orange-600 font-semibold" : ""}`
              }
            >
              Categorias
            </NavLink>
          </li>
          <li>
            <span className={baseLink}>Sobre</span>
          </li>
          <li>
            <span className={baseLink}>Contato</span>
          </li>
        </ul>

        {/* Ações (desktop) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Botão Postar */}
          <button
            type="button"
            onClick={() => alert("Funcionalidade em desenvolvimento.")}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-400 text-orange-600 bg-white hover:bg-orange-50 transition-all text-sm font-medium"
          >
            <span className="text-lg">＋</span>
            <span>Postar Receita</span>
          </button>

          {/* Botão Entrar */}
          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-400 transition-all"
          >
            Entrar
          </Link>
        </div>

        {/* Mobile: só logo + botão simples */}
        <div className="md:hidden text-xs text-gray-500">Menu</div>
      </nav>
    </header>
  );
}
