package src.main.java.br.com.quasetudogostoso.model;

public class Comentario {
    private int nota;
    private String dataComentario;
    private int idComentario;
    private Usuario usuario;

    public Comentario(int var1, String var2, int var3, Usuario var4) {
        this.dataComentario = var2;
        this.idComentario = var3;
        this.nota = var1;
        this.usuario = var4;
    }

    public int getNota() {
        return this.nota;
    }

    public void setNota(int var1) {
        this.nota = var1;
    }

    public String getDataComentario() {
        return this.dataComentario;
    }

    public void setDataComentario(String var1) {
        this.dataComentario = var1;
    }

    public int getIdComentario() {
        return this.idComentario;
    }

    public void setIdComentario(int var1) {
        this.idComentario = var1;
    }

    public Usuario getUsuario() {
        return this.usuario;
    }

    public void setUsuario(Usuario var1) {
        this.usuario = var1;
    }
}