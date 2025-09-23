import java.util.ArrayList;
import java.util.List;

public class Comentario {
    public int nota;
    public String dataComentario;
    public int idComentario;
    private Usuario usuario;

    public Comentario (int nota, String dataComentario, int idComentario, Usuario usuario){
        this.dataComentario = dataComentario;
        this.idComentario = idComentario;
        this.nota = nota;
        this.usuario = usuario;
    }
}
