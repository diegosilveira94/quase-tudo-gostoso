package src.main.java.br.com.quasetudogostoso.controller;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import src.main.java.br.com.quasetudogostoso.model.Usuario;
import src.main.java.br.com.quasetudogostoso.service.UsuarioService;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class UsuarioController implements HttpHandler {
    private final UsuarioService service;

    public UsuarioController(UsuarioService service) {
        this.service = service;
    }

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String method = exchange.getRequestMethod();

        if ("GET".equalsIgnoreCase(method)) {
            handleGet(exchange);
        } else if ("POST".equalsIgnoreCase(method)) {
            handlePost(exchange);
        } else {
            String resp = "Método não suportado";
            byte[] bytes = resp.getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders().set("Content-Type", "text/plain; charset=UTF-8");
            exchange.sendResponseHeaders(405, bytes.length);
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(bytes);
            }
        }
    }

    private void handleGet(HttpExchange exchange) throws IOException {
        List<Usuario> usuarios = service.listar();
        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < usuarios.size(); i++) {
            Usuario u = usuarios.get(i);
            json.append(String.format(
                    "{\"id\":%d,\"nome\":\"%s\",\"email\":\"%s\",\"dataNasc\":\"%s\",\"cep\":\"%d\",\"genero\":\"%s\",\"senha\":\"%s\"}",
                    u.getIdUsuario(), u.getNomeUsuario(), u.getEmail(), u.getDataNasc(), u.getCep(), u.getGenero(), u.getSenha()
            ));
            if (i < usuarios.size() - 1) json.append(",");
        }
        json.append("]");
        byte[] bytes = json.toString().getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.sendResponseHeaders(200, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private void handlePost(HttpExchange exchange) throws IOException {
        InputStream is = exchange.getRequestBody();
        String body = new String(is.readAllBytes(), StandardCharsets.UTF_8);

        // {"nome":"Diego","email":"diego@gmail.com","DataNasc":"05/09/1994","cep":89210040, "genero":"M","senha":"senha123"}
        String nome = body.replaceAll(".*\"nome\"\\s*:\\s*\"([^\"]+)\".*", "$1");
        String email = body.replaceAll(".*\"email\"\\s*:\\s*\"([^\"]+)\".*", "$1");
        String dataNasc = body.replaceAll(".*\"dataNasc\"\\s*:\\s*\"([^\"]+)\".*", "$1");
        int cep = Integer.parseInt(body.replaceAll(".*\"cep\"\\s*:\\s*\"([^\"]+)\".*", "$1"));
        String genero = body.replaceAll(".*\"genero\"\\s*:\\s*\"([^\"]+)\".*", "$1");
        String senha = body.replaceAll(".*\"senha\"\\s*:\\s*\"([^\"]+)\".*", "$1");

        Usuario u = service.adicionar(nome, email, dataNasc, cep, genero, senha);

        String resp = String.format("{\"status\":\"Usuario criado!\",\"id\":%d}", u.getIdUsuario());
        byte[] bytes = resp.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.sendResponseHeaders(200, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }
}
