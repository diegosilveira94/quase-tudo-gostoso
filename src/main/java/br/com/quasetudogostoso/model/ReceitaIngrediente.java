package model;

public class ReceitaIngrediente {
    private float qtd;
    private Receita receita;
    private Ingrediente ingrediente;

    public ReceitaIngrediente(float qtd, Receita receita, Ingrediente ingrediente) {
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
