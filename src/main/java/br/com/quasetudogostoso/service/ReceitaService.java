package service;

import model.Receita;
import repository.ReceitaRepository;

public class ReceitaService {
    private ReceitaRepository receitaRepository;

    public ReceitaService(ReceitaRepository receitaRepository) {
        this.receitaRepository = receitaRepository;
    }

    public void criarReceita(Receita receita) {
        receitaRepository.salvar(receita);
    }
}
