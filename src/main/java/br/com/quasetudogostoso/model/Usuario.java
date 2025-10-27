package src.main.java.br.com.quasetudogostoso.model;
import java.util.ArrayList;
import java.util.List;

public class Usuario {
    private int idUsuario;
    private String nomeUsuario;
    private String email;
    private String dataNasc;
    private int cep;
    private String genero;
    private String senha;
    private String senhaConfirmada;
    private String dataInscricao;
    private List<model.Comentario> comentario = new ArrayList<>();
    private List<Receita> receitas = new ArrayList<>();

    public int getIdUsuario(int i) {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNomeUsuario(String nome) {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getEmail(String email) {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDataNasc(String dataNasc) {
        return this.dataNasc;
    }

    public void setDataNasc(String dataNasc) {
        this.dataNasc = dataNasc;
    }

    public int getCep(int cep) {
        return this.cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public String getGenero(String genero) {
        return this.genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public String getSenha(String senha) {
        return this.senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setConfirmaSenha(String senhaConfirmada){
        this.senhaConfirmada = senhaConfirmada;
    }
    
    public String getDataInscricao() {
        return dataInscricao;
    }

    public void setDataInscricao(String dataInscricao) {
        this.dataInscricao = dataInscricao;
    }

    public List<model.Comentario> getComentario() {
        return comentario;
    }

    public void setComentario(List<model.Comentario> comentario) {
        this.comentario = comentario;
    }

    public List<Receita> getReceitas() {
        return receitas;
    }

    public void setReceitas(List<Receita> receitas) {
        this.receitas = receitas;
    }
}