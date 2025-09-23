import java.util.ArrayList;
import java.util.List;

public class Categoria {
    private int idCategoria;
    public String categoria;
    public boolean ativo;
    private List<CategoriaReceita> receita;

    public Categoria(int idCategoria, String categoria, boolean ativo) {
        this.idCategoria = idCategoria;
        this.categoria = categoria;
        this.ativo = false;
        this.receita = new ArrayList<>();
    }
}
