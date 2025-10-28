package src.main.java.br.com.quasetudogostoso.service;

import src.main.java.br.com.quasetudogostoso.model.Usuario;

import java.util.ArrayList;
import java.util.List;

public class UsuarioService {
    private final List<Usuario> usuarios = new ArrayList<>();
    private int contador = 1;

    // UTILIZADO PARA O MAIN.JAVA
//    public void listar(List<Usuario> usuarios) {
//        System.out.println("\n === Usuários ===");
//        if (usuarios.isEmpty()) {
//            System.out.println("Nenhum usuário cadastrado.");
//            return;
//        }
//
//
//
//        for (Usuario user : usuarios) System.out.printf("ID: %d - %s | Data inscrição: %s %n", user.getIdUsuario(), user.getNomeUsuario(), user.getDataInscricao());
//    }

    public List<Usuario> listar() { return usuarios;}

    public Usuario adicionar(String nome, String email, String dataNasc, int cep, String genero, String senha) {
        Usuario u = new Usuario();
        u.setIdUsuario(contador++);
        u.setNomeUsuario(nome);
        u.setEmail(email);
        u.setDataNasc(dataNasc);
        u.setCep(cep);
        u.setGenero(genero);
        u.setSenha(senha);
        usuarios.add(u);
        return u;
    }
}
