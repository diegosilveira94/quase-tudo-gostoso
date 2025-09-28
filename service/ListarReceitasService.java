package service;

import model.Receita;

import java.util.List;

public class ListarReceitasService {

    public void listar(List<Receita> receitas) {
        System.out.println("\n === Receitas ===");
        if (receitas.isEmpty()) {
            System.out.println("Nenhuma receita cadastrada.");
            return;
        }

        for (Receita r : receitas) System.out.printf("ID: %d - %s (%s)%n", r.getIdReceita(), r.getTitulo(), r.getDescricao());
    }
}
