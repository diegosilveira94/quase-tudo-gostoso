package service;

import src.main.java.br.com.quasetudogostoso.model.Usuario;

import java.time.LocalDateTime;

public class CriarUsuarioService {
    private static int contadorIdUsuario = 1;

    public Usuario criarUsuario(String nomeUsuario, String email, String dataNasc, int cep, char genero, String senha, String senhaConfirmada) {
        Usuario usuario = new Usuario();
        usuario.setIdUsuario(contadorIdUsuario);
        usuario.setNomeUsuario(nomeUsuario);
        usuario.setEmail(email);
        usuario.setDataNasc(dataNasc);
        usuario.setCep(cep);
        usuario.setGenero(genero);
        usuario.setSenha(senha);
        usuario.setConfirmaSenha(senhaConfirmada);
        usuario.setDataInscricao(String.valueOf(LocalDateTime.now()));
        contadorIdUsuario++;
        return usuario;
    }
}
