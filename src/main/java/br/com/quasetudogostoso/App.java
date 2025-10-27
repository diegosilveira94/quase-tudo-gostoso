package src.main.java.br.com.quasetudogostoso;

import com.sun.net.httpserver.HttpServer;
import src.main.java.br.com.quasetudogostoso.controller.ReceitaController;
import src.main.java.br.com.quasetudogostoso.service.ReceitaService;

import java.io.IOException;
import java.net.InetSocketAddress;

public class App {
    private static final int PORT = 8080;

    public static void main(String[] args) throws IOException {
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        ReceitaService receitaService = new ReceitaService();
        ReceitaController receitaController = new ReceitaController(receitaService);

        server.createContext("/receitas", receitaController);
        server.setExecutor(null);
        server.start();

        System.out.println("Servidor iniciado em http://localhost:" + PORT + "/receitas");
    }
}
