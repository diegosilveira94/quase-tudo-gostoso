package src.main.java.br.com.quasetudogostoso.model;

import src.main.java.br.com.quasetudogostoso.model.Receita;

public class ReceitaIngrediente {
    private float qtd;
    private Receita receita;
    private model.Ingrediente ingrediente;

    public ReceitaIngrediente(float qtd, Receita receita, model.Ingrediente ingrediente) {
        this.qtd = qtd;
        this.receita = receita;
        this.ingrediente = ingrediente;
    };

    public float getQtd() {
        return qtd;
    }

    public void setQtd(float qtd) {
        this.qtd = qtd;
    }
}
