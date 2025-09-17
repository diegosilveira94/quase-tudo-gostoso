public class Receita {
    public String titulo;
    public String descricao;
    public String imagem;
    public int idReceita;   

    public Receita (int idReceita, String titulo, String descricao, String imagem){
        this.descricao = descricao;
        this.idReceita = idReceita;
        this.imagem = imagem;
        this.titulo = titulo;
    }
}


