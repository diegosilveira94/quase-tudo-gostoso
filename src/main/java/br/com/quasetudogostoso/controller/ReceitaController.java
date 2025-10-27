package src.main.java.br.com.quasetudogostoso.controller;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import src.main.java.br.com.quasetudogostoso.model.Receita;
import src.main.java.br.com.quasetudogostoso.service.ReceitaService;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class ReceitaController implements HttpHandler {
    private final ReceitaService service;

    public ReceitaController(ReceitaService service) {
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
        List<Receita> receitas = service.listar();
        StringBuilder json = new StringBuilder("[");
        for (int i = 0; i < receitas.size(); i++) {
            Receita r = receitas.get(i);
            json.append(String.format(
                    "{\"id\":%d,\"titulo\":\"%s\",\"descricao\":\"%s\"}",
                    r.getIdReceita(), r.getTitulo(), r.getDescricao()
            ));
            if (i < receitas.size() - 1) json.append(",");
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

        // Parse simples de JSON manual: {"titulo":"Bolo","descricao":"Delicioso"}
        String titulo = body.replaceAll(".*\"titulo\"\\s*:\\s*\"([^\"]+)\".*", "$1");
        String descricao = body.replaceAll(".*\"descricao\"\\s*:\\s*\"([^\"]+)\".*", "$1");

        Receita r = service.adicionar(titulo, descricao);

        String resp = String.format("{\"status\":\"Receita criada!\",\"id\":%d}", r.getIdReceita());
        byte[] bytes = resp.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", "application/json; charset=UTF-8");
        exchange.sendResponseHeaders(200, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }
}
