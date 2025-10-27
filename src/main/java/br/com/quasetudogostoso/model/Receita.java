package src.main.java.br.com.quasetudogostoso.model;

import java.util.ArrayList;
import java.util.List;

public class Receita {
    private int idReceita;
    private String titulo;
    private String descricao;
    private String imagem;
    private List<ReceitaIngrediente> ingrediente = new ArrayList<>();
    private List<CategoriaReceita> categoria = new ArrayList<>();
    private List<model.Comentario> comentario = new ArrayList<>();
    private Usuario usuario;

    public Receita() {
        this.categoria = new ArrayList<>();
        this.comentario = new ArrayList<>();
        this.ingrediente = new ArrayList<>();
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


