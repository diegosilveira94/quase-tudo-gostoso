import java.util.ArrayList;
import java.util.List;

public class Receita {
    public String titulo;
    public String descricao;
    public String imagem;
    public int idReceita;
    private List<ReceitaIngrediente> ingrediente;
    private List<CategoriaReceita> categoria;
    private List<Comentario> comentario;

    static List<Receita> receitas = new ArrayList<Receita>();

    public Receita (int receita, String titulo, String descricao, String imagem, ReceitaIngrediente ingrediente){
        this.descricao = descricao;
        this.idReceita = idReceita;
        this.imagem = imagem;
        this.titulo = titulo;
        this.categoria = new ArrayList<>();
        this.comentario = new ArrayList<>();
        this.ingrediente = new ArrayList<>();

        receitas.add(this);
        /*
        * for (Receita r : Receita.receitas) {
        * */
    }
}


