import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Recipes from "./pages/Recipes.jsx";
import RecipeDetails from "./pages/RecipeDetails.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receitas" element={<Recipes />} />
          <Route path="/receitas/:id" element={<RecipeDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
