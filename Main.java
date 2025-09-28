import model.Ingrediente;
import model.Receita;
import model.Usuario;
import service.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

        private static Scanner scanner = new Scanner(System.in);
        private static List<Receita> receitas = new ArrayList<>();
        private static List<Usuario> usuarios = new ArrayList<>();
        private static List<Ingrediente> ingredientes = new ArrayList<>();

    public static void main(String[] args) {
        int opcao;

        do {
            System.out.print("\n=== Quase Tudo Gostoso ===");
            System.out.print("\n1 - Adicionar Receita");
            System.out.print("\n2 - Listar Receitas");
            System.out.print("\n3 - Adicionar Usuário");
            System.out.print("\n4 - Listar Usuários");
            System.out.print("\n5 - Adicionar Ingrediente");
            System.out.print("\n6 - Listar Ingredientes");
            System.out.print("\n0 - Sair");
            System.out.print("\nEscolha uma opção: ");
            opcao = scanner.nextInt();
            scanner.nextLine(); // limpar buffer

            switch (opcao) {
                case 1 -> adicionarReceita();
                case 2 -> listarReceitas();
                case 3 -> adicionarUsuario();
                case 4 -> listarUsuarios();
                case 5 -> adicionarIngrediente();
                case 6 -> listarIngredientes();
                case 0 -> System.out.println("Encerrando...");
                default -> System.out.println("Opção inválida.");
            }
        } while (opcao != 0);
    }

    private static void adicionarReceita() {
        System.out.println("\nTítulo da Receita: ");
        String titulo = scanner.nextLine();
        System.out.println("Descrição da Receita: ");
        String descricao = scanner.nextLine();

        CriarReceitaService service = new CriarReceitaService();
        Receita receita = service.criarReceita(titulo, descricao);

        receitas.add(receita);
        System.out.println("\nReceita adicionada com sucesso!");
    }

    private static void listarReceitas() {
        ListarReceitasService service = new ListarReceitasService();
        service.listar(receitas);
    }

    private static void adicionarUsuario() {
        System.out.println("Nome: ");
        String nome = scanner.nextLine();
        System.out.println("E-mail: ");
        String email = scanner.nextLine();
        System.out.println("Data de Nascimento: ");
        String dataNasc = scanner.nextLine();
        System.out.println("CEP (Apenas números): ");
        int cep = scanner.nextInt();
        scanner.nextLine(); // limpar buffer
        System.out.println("Gênero (M/F): ");
        char genero = scanner.next().charAt(0);
        System.out.println("Senha: ");
        String senha = scanner.nextLine();

        CriarUsuarioService service = new CriarUsuarioService();
        Usuario usuario = service.criarUsuario(nome, email, dataNasc, cep, genero, senha);

        usuarios.add(usuario);
        System.out.println("\nUsuário adicionado com sucesso!");
    }

    private static void listarUsuarios() {
        ListarUsuariosService service = new ListarUsuariosService();
        service.listar(usuarios);
    }

    private static void adicionarIngrediente() {
        System.out.println("Informe o ingrediente: ");
        String nomeIngrediente = scanner.nextLine();

        CriarIngredienteService service = new CriarIngredienteService();
        Ingrediente ingrediente = service.criarIngrediente(nomeIngrediente);

        ingredientes.add(ingrediente);
        System.out.println("\nIngrediente adicionado com sucesso!");
    }

    private static void listarIngredientes() {
        ListarIngredienteService service = new ListarIngredienteService();
        service.listar(ingredientes);
    }
}
