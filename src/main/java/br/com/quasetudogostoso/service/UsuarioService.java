package src.main.java.br.com.quasetudogostoso.service;

import src.main.java.br.com.quasetudogostoso.model.Usuario;

import java.util.List;

public class UsuarioService {
    public void listar(List<Usuario> usuarios) {
        System.out.println("\n === Usuários ===");
        if (usuarios.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
            return;
        }

        for (Usuario user : usuarios) System.out.printf("ID: %d - %s | Data inscrição: %s %n", user.getIdUsuario(), user.getNomeUsuario(), user.getDataInscricao());
    }

    public Usuario adicionar(String nome, String email, String dataNasc, int cep, char genero, String senha) {
        return null;
    }
}
