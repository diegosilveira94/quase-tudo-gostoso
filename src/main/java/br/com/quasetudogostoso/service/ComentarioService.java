package service;

import model.Comentario;
import java.util.ArrayList;
import java.util.List;

public class ComentarioService {

    // Simulação de um "banco de dados" em memória
    private static List<Comentario> comentarios = new ArrayList<>();

    // Método para criar um novo comentário
    public Comentario criarComentario(Comentario comentario) {
        comentarios.add(comentario);
        return comentario;
    }

    // Método para listar todos os comentários
    public List<Comentario> listarComentarios() {
        return comentarios;
    }

    // Método para buscar um comentário pelo ID
    public Comentario buscarComentarioPorId(int idComentario) {
        for (Comentario c : comentarios) {
            if (c.getIdComentario() == idComentario) {
                return c;
            }
        }
        return null; // se não encontrar
    }
}
