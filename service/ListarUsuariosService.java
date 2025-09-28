package service;

import model.Receita;
import model.Usuario;

import java.util.List;

public class ListarUsuariosService {

    public void listar(List<Usuario> usuarios) {
        System.out.println("\n === Usuários ===");
        if (usuarios.isEmpty()) {
            System.out.println("Nenhum usuário cadastrado.");
            return;
        }

        for (Usuario user : usuarios) System.out.printf("ID: %d - %s | Data inscrição: %s %n", user.getIdUsuario(), user.getNomeUsuario(), user.getDataInscricao());
    }
}
