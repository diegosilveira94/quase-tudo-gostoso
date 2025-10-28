package src.main.java.br.com.quasetudogostoso.service;

import src.main.java.br.com.quasetudogostoso.model.Ingrediente;

import java.util.ArrayList;
import java.util.List;

public class IngredienteService {
    List<Ingrediente> ingredientes = new ArrayList<>();
    private static int contadorIdIngrediente = 1;

    public Ingrediente criarIngrediente(String nomeIngrediente) {
        Ingrediente ingrediente = new Ingrediente();
        ingrediente.setIdIngrediente(contadorIdIngrediente);
        ingrediente.setIngrediente(nomeIngrediente);
        contadorIdIngrediente++;
        ingredientes.add(ingrediente);
        return ingrediente;
    }

    public List<Ingrediente> listar() {
        return ingredientes;
    }
}


