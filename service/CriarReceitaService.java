package service;

import model.Receita;

public class CriarReceitaService {
    private static int contadorIdReceita = 1;
    public Receita criarReceita(String titulo, String descricao) {
        Receita receita = new Receita();
        receita.setIdReceita(contadorIdReceita);
        receita.setTitulo(titulo);
        receita.setDescricao(descricao);
        contadorIdReceita++;
        return receita;
    }
}
