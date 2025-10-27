package src.main.java.br.com.quasetudogostoso;

import com.sun.net.httpserver.HttpServer;
import src.main.java.br.com.quasetudogostoso.controller.ReceitaController;
import src.main.java.br.com.quasetudogostoso.controller.UsuarioController;
import src.main.java.br.com.quasetudogostoso.service.ReceitaService;
import src.main.java.br.com.quasetudogostoso.service.UsuarioService;

import java.io.IOException;
import java.net.InetSocketAddress;

public class App {
    private static final int PORT = 8080;

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        ReceitaService receitaService = new ReceitaService();
        UsuarioService usuarioService = new UsuarioService();
        service.IngredienteService ingredienteService = new service.IngredienteService();
        service.ComentarioService comentarioService = new service.ComentarioService();

        ReceitaController receitaController = new ReceitaController(receitaService);
        UsuarioController usuarioController = new UsuarioController(usuarioService)
        IngredienteController ingredienteController = new IngredienteController(ingredienteService);
        ComentarioController comentarioController = new ComentarioController(comentarioService);

        server.createContext("/receitas", receitaController);
        server.createContext("/usuario", usuarioController);
        server.createContext("/ingrediente", ingredienteController);
        server.createContext("/comentario", comentarioController);
        server.setExecutor(null);
        server.start();

        System.out.println("Servidor iniciado em http://localhost:" + PORT + "/receitas");
        System.out.println("Servidor iniciado em http://localhost:" + PORT + "/usuario");
        System.out.println("Servidor iniciado em http://localhost:" + PORT + "/ingrediente");
        System.out.println("Servidor finalizado em http://localhost:" + PORT + "/comentario");
    }
}