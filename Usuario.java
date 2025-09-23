import java.util.ArrayList;
import java.util.List;

public class Usuario {
    private int idUsuario;
    private String nomeUsuario;
    private String email;
    private String dataNasc;
    private int cep;
    private char genero;
    private String senha;
    private String dataIncricao;
    private List<Comentario> comentario;

    public Usuario(int idUsuario, String nomeUsuario, String email, String dataNasc, int cep, char genero, String senha, String dataInscricao) {
        this.idUsuario = idUsuario;
        this.nomeUsuario = nomeUsuario;
        this.email = email;
        this.dataNasc = dataNasc;
        this.cep = cep;
        this.genero = genero;
        this.senha = senha;
        this.dataIncricao = dataInscricao;
        this.comentario = new ArrayList<>();
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getNomeUsuario() {
        return nomeUsuario;
    }

    public void setNomeUsuario(String nomeUsuario) {
        this.nomeUsuario = nomeUsuario;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDataNasc() {
        return dataNasc;
    }

    public void setDataNasc(String dataNasc) {
        this.dataNasc = dataNasc;
    }

    public int getCep() {
        return cep;
    }

    public void setCep(int cep) {
        this.cep = cep;
    }

    public char getGenero() {
        return genero;
    }

    public void setGenero(char genero) {
        this.genero = genero;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getDataIncricao() {
        return dataIncricao;
    }

    public void setDataIncricao(String dataIncricao) {
        this.dataIncricao = dataIncricao;
    }

    public List<Comentario> getComentario() {
        return comentario;
    }

    public void setComentario(List<Comentario> comentario) {
        this.comentario = comentario;
    }
}