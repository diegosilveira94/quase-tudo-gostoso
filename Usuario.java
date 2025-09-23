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

}