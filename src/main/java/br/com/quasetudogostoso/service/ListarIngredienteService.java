package service;

import model.Ingrediente;

import java.util.List;

public class ListarIngredienteService {

    public void listar(List<Ingrediente> ingredientes) {
        System.out.println("\n=== Ingredientes ===");
        if (ingredientes.isEmpty()) {
            System.out.println("Nenhum ingrediente cadastrado.");
            return;
        }

        for (Ingrediente i : ingredientes) System.out.printf("ID: %d - %s %n", i.getIdIngrediente(), i.getIngrediente());
    }
}
