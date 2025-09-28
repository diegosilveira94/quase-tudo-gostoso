package model;
import java.util.ArrayList;
import java.util.List;

public class Ingrediente {
    private int idIngrediente;
    private String ingrediente;
    private List<ReceitaIngrediente> receita = new ArrayList<>();
    static List<Ingrediente> ingredientes = new ArrayList<>();

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

}
