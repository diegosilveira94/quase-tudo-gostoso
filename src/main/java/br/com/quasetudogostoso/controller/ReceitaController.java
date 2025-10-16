package controller;

import model.Receita;
import service.ReceitaService;

public class ReceitaController {
    private ReceitaService receitaService;
    public static int contadorIdReceita = 1;

    public ReceitaController(ReceitaService receitaService) {
        this.receitaService = receitaService;
    }

    public void cadastrarReceita(int idReceita, String titulo, String, String descricao) {
        Receita receita = new Receita();
        receita.setIdReceita(contadorIdReceita);
        receita.setTitulo(titulo);
        receita.setDescricao(descricao);
        contadorIdReceita++;
    }

    public void listarReceitas() {
        for (Receita r : receitaService.listarReceitas()) {
            System.out.println(r.getTitulo());
        }
    }
}
