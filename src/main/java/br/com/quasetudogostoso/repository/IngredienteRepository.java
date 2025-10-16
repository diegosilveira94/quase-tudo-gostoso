package repository;

import model.Categoria;
import model.Ingrediente;

import java.util.ArrayList;
import java.util.List;

public class IngredienteRepository {
    private List<Ingrediente> ingredientes = new ArrayList<>();

    public void salvar(Ingrediente ingrediente) {
        ingredientes.add(ingrediente);
    }

    public List<Ingrediente> listar() {
        return ingredientes;
    }
}
