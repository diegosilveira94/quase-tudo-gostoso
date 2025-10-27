package src.main.java.br.com.quasetudogostoso;

import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;
import src.main.java.br.com.quasetudogostoso.controller.ReceitaController;
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

        ReceitaController receitaController = new ReceitaController(receitaService);

        server.createContext("/receitas", receitaController);
        server.createContext("/usuario", (HttpHandler) usuarioService);
        server.createContext("/ingrediente", (HttpHandler) ingredienteService);
        server.setExecutor(null);
        server.start();

        System.out.println("Servidor iniciado em http://localhost:" + PORT + "/receitas");
    }
}
