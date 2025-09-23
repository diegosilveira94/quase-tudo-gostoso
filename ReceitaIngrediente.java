public class ReceitaIngrediente {
    public float qtd;
    private Receita receita;
    private Ingrediente ingrediente;

    public ReceitaIngrediente(float qtd, Receita receita, Ingrediente ingrediente) {
        this.qtd = qtd;
        this.receita = receita;
        this.ingrediente = ingrediente;
    };
}
