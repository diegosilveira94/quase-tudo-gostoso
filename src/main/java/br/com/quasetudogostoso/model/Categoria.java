package src.main.java.br.com.quasetudogostoso.model;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Categoria implements HttpHandler {
    private int idCategoria;
    private String categoria;
    private boolean ativo;
    private List<Receita> receita;
    private List<Categoria> categorias;

    public Categoria(int idCategoria, String categoria, boolean ativo) {
        this.idCategoria = idCategoria;
        this.categoria = categoria;
        this.ativo = false;
        this.receita = new ArrayList<>();

        categorias.add(this);
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

    public List<Receita> getReceita() {
        return receita;
    }

    public void setReceita(List<Receita> receita) {
        this.receita = receita;
    }

    @Override
    public String toString() {
        return "Nome: " + this.categoria + "Ativo: " + this.ativo;
    }


    @Override
    public void handle(HttpExchange exchange) throws IOException {

    }
}
