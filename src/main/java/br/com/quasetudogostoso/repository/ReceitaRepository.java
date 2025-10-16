package repository;

import model.Receita;

import java.util.ArrayList;
import java.util.List;

public class ReceitaRepository {
    private final List<Receita> receitas = new ArrayList<>();

    public void salvar(Receita receita) {
        receitas.add(receita);
    }

    public List<Receita> listar() {
        return receitas;
    }
}
