package service;

import model.Ingrediente;

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
        return ingrediente;
    }

    public void listar(List<Ingrediente> ingredientes) {
        System.out.println("\n=== Ingredientes ===");
        if (ingredientes.isEmpty()) {
            System.out.println("Nenhum ingrediente cadastrado.");
            return;
        }

        for (Ingrediente i : ingredientes) System.out.printf("ID: %d - %s %n", i.getIdIngrediente(), i.getIngrediente());
    }
}


