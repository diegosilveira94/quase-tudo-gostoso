package service;

import model.Ingrediente;

import java.util.ArrayList;
import java.util.List;

public class CriarIngredienteService {
    List<Ingrediente> ingredientes = new ArrayList<>();
    private static int contadorIdIngrediente = 1;

    public Ingrediente criarIngrediente(String nomeIngrediente) {
        Ingrediente ingrediente = new Ingrediente();
        ingrediente.setIdIngrediente(contadorIdIngrediente);
        ingrediente.setIngrediente(nomeIngrediente);
        contadorIdIngrediente++;
        return ingrediente;
    }
}
