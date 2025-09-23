import java.util.ArrayList;
import java.util.List;

public class Ingrediente {
    private int idIngrediente;
    private String ingrediente;
    private List<ReceitaIngrediente> receita;

    public Ingrediente(String ingrediente, int idIngrediente) {
        this.ingrediente = ingrediente;
        this.idIngrediente = idIngrediente;
        this.receita = new ArrayList<>();
    }

    public int getIdIngrediente() {
        return idIngrediente;
    }

    public void setIdIngrediente(int idIngrediente) {
        this.idIngrediente = idIngrediente;
    }

    public String getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(String ingrediente) {
        this.ingrediente = ingrediente;
    }

    public List<ReceitaIngrediente> getReceita() {
        return receita;
    }

    public void setReceita(List<ReceitaIngrediente> receita) {
        this.receita = receita;
    }
}
