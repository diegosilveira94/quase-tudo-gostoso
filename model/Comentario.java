package model;
public class Comentario {
    private int nota;
    private String dataComentario;
    private int idComentario;
    private Usuario usuario;

    public Comentario (int nota, String dataComentario, int idComentario, Usuario usuario){
        this.dataComentario = dataComentario;
        this.idComentario = idComentario;
        this.nota = nota;
        this.usuario = usuario;
    }

    public int getNota() {
        return nota;
    }

    public void setNota(int nota) {
        this.nota = nota;
    }

    public String getDataComentario() {
        return dataComentario;
    }

    public void setDataComentario(String dataComentario) {
        this.dataComentario = dataComentario;
    }

    public int getIdComentario() {
        return idComentario;
    }

    public void setIdComentario(int idComentario) {
        this.idComentario = idComentario;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
