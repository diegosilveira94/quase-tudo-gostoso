public class Categoria {
    private int idCategoria;
    public String categoria;
    public boolean ativo;

    public Categoria(int idCategoria, String categoria, boolean ativo) {
        this.idCategoria = idCategoria;
        this.categoria = categoria;
        this.ativo = false;
    }
}
