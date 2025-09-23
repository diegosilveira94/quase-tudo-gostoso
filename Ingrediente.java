import java.util.ArrayList;
import java.util.List;

public class Ingrediente {
    public int idIngrediente;
    public String ingrediente;
    private List<ReceitaIngrediente> receita;

    public Ingrediente(String ingrediente, int idIngrediente) {
        this.ingrediente = ingrediente;
        this.idIngrediente = idIngrediente;
        this.receita = new ArrayList<>();
    }
}
