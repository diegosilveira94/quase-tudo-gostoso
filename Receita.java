public class Receita {
    public String titulo;
    public String descricao;
    public String imagem;
    public int idreceita;   

    public Receita (int idreceita, String titulo, String descricao, String imagem){
        this.descricao = descricao;
        this.idreceita = idreceita;
        this.imagem = imagem;
        this.titulo = titulo;
    }
}


