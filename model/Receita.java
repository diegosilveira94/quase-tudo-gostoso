package model;
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
    private Usuario usuario;

    public Receita (){
        this.descricao = descricao;
        this.idReceita = idReceita;
        this.imagem = imagem;
        this.titulo = titulo;
        this.categoria = new ArrayList<>();
        this.comentario = new ArrayList<>();
        this.ingrediente = new ArrayList<>();
        this.usuario = usuario;
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
}


