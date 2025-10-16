package model;
import java.util.ArrayList;
import java.util.List;

public class Categoria {
    private int idCategoria;
    private String categoria;
    private boolean ativo;
    private List<CategoriaReceita> receita;

    public Categoria(int idCategoria, String categoria, boolean ativo) {
        this.idCategoria = idCategoria;
        this.categoria = categoria;
        this.ativo = false;
        this.receita = new ArrayList<>();
    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public boolean isAtivo() {
        return ativo;
    }

    public void setAtivo(boolean ativo) {
        this.ativo = ativo;
    }

    public List<CategoriaReceita> getReceita() {
        return receita;
    }

    public void setReceita(List<CategoriaReceita> receita) {
        this.receita = receita;
    }


}
