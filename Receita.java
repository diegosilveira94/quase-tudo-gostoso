import java.util.ArrayList;
import java.util.List;

public class Receita {
    private String titulo;
    private String descricao;
    private String imagem;
    private int idReceita;
    private List<ReceitaIngrediente> ingrediente;
    private List<CategoriaReceita> categoria;
    private List<Comentario> comentario;

    static List<Receita> receitas = new ArrayList<Receita>();

    public Receita (int idReceita, String titulo, String descricao, String imagem){
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

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public int getIdReceita() {
        return idReceita;
    }

    public void setIdReceita(int idReceita) {
        this.idReceita = idReceita;
    }

    public List<ReceitaIngrediente> getIngrediente() {
        return ingrediente;
    }

    public void setIngrediente(List<ReceitaIngrediente> ingrediente) {
        this.ingrediente = ingrediente;
    }

    public List<CategoriaReceita> getCategoria() {
        return categoria;
    }

    public void setCategoria(List<CategoriaReceita> categoria) {
        this.categoria = categoria;
    }

    public List<Comentario> getComentario() {
        return comentario;
    }

    public void setComentario(List<Comentario> comentario) {
        this.comentario = comentario;
    }
}


