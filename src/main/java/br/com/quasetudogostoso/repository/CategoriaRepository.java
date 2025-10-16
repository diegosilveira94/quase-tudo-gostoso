package repository;

import model.Categoria;
import model.Ingrediente;

import java.util.ArrayList;
import java.util.List;

public class CategoriaRepository {
    private List<Categoria> categorias = new ArrayList<>();

    public void salvar(Categoria categoria) {
        categorias.add(categoria);
    }

    public List<Categoria> listar() {
        return categorias;
    }
}
