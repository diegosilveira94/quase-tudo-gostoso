package src.main.java.br.com.quasetudogostoso.service;

import src.main.java.br.com.quasetudogostoso.model.Receita;

import java.util.ArrayList;
import java.util.List;

public class ReceitaService {
    private final List<Receita> receitas = new ArrayList<>();
    private int contador = 1;

    public List<Receita> listar() {
        return receitas;
    }

    public Receita adicionar(String titulo, String descricao) {
        Receita r = new Receita();
        r.setIdReceita(contador++);
        r.setTitulo(titulo);
        r.setDescricao(descricao);
        receitas.add(r);
        return r;
    }
}

