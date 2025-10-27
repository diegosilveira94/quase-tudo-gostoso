package controller;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import model.Comentario;
import model.Usuario;
import service.ComentarioService;

import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

public class ComentarioController implements HttpHandler {

    private ComentarioService comentarioService = new ComentarioService();

    @Override
    public void handle(HttpExchange exchange) throws IOException {
        String method = exchange.getRequestMethod();

        switch (method) {
            case "GET":
                handleGet(exchange);
                break;
            case "POST":
                handlePost(exchange);
                break;
            default:
                String response = "Método HTTP não suportado: " + method;
                exchange.sendResponseHeaders(405, response.length());
                try (OutputStream os = exchange.getResponseBody()) {
                    os.write(response.getBytes());
                }
                break;
        }
    }

    private void handleGet(HttpExchange exchange) throws IOException {
        List<Comentario> comentarios = comentarioService.listarComentarios();
        StringBuilder response = new StringBuilder();

        for (Comentario c : comentarios) {
            response.append("ID: ").append(c.getIdComentario())
                    .append(", Nota: ").append(c.getNota())
                    .append(", Data: ").append(c.getDataComentario())
                    .append(", Usuário: ").append(c.getUsuario() != null ? c.getUsuario().getNome() : "Sem usuário")
                    .append("\n");
        }

        byte[] bytes = response.toString().getBytes();
        exchange.sendResponseHeaders(200, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private void handlePost(HttpExchange exchange) throws IOException {
        InputStream is = exchange.getRequestBody();
        String body = new String(is.readAllBytes(), StandardCharsets.UTF_8);

        // Espera um body no formato simples:
        // nota=5&dataComentario=2023-10-30&idComentario=1&usuario=Joao
        String[] params = body.split("&");
        int nota = Integer.parseInt(params[0].split("=")[1]);
        String dataComentario = params[1].split("=")[1];
        int idComentario = Integer.parseInt(params[2].split("=")[1]);
        String nomeUsuario = params[3].split("=")[1];

        Usuario usuario = new Usuario(nomeUsuario, "email@teste.com", "senha123");
        Comentario novoComentario = new Comentario(nota, dataComentario, idComentario, usuario);

        comentarioService.criarComentario(novoComentario);

        String response = "Comentário criado com sucesso! ID: " + idComentario;
        exchange.sendResponseHeaders(201, response.length());
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(response.getBytes());
        }
    }
}
