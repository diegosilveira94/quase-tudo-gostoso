# 🥞 Quase Tudo Gostoso

### Projeto Acadêmico Interdisciplinar

Este projeto está sendo desenvolvido durante o curso de **Análise e Desenvolvimento de Sistemas** na **Faculdade Senac Joinville**.  
Reúne os trabalhos das disciplinas de **Desenvolvimento Web**, **Programação Orientada a Objetos** e **Backend com Node.js**, aplicados sobre o mesmo tema: um portal de receitas chamado **Quase Tudo Gostoso**.

---

## 🎯 Objetivo Geral

Criar uma aplicação completa e modular que simula uma plataforma de receitas culinárias, permitindo:

- Cadastrar usuários, categorias e tipos de refeição (backend);
- Exibir receitas, detalhes e interações (frontend);

O sistema é inspirado em sites populares de culinária, mas com fins exclusivamente **educacionais**.

---

## 🧱 Estrutura do Projeto

```
quase-tudo-gostoso/
│
├── frontend/                      # Parte visual (HTML, CSS, JS)
│   ├── index.html                 # Página inicial
│   ├── receitas.html              # Lista e filtros de receitas
│   ├── detalhe.html               # Detalhes de uma receita
│   ├── usuario.html               # Simulação de login/cadastro
│   ├── admin.html                 # Página administrativa (opcional)
│   ├── css/
│   │   ├── style.css              # Estilos gerais e layout
│   │   └── forms.css              # Estilos para formulários
│   ├── js/
│   │   ├── main.js                # Funções e scripts globais
│   │   ├── receitas.js            # Filtros e listagem dinâmica
│   │   ├── detalhe.js             # Exibição de detalhes e comentários
│   │   ├── usuario.js             # Login/cadastro via LocalStorage
│   │   └── admin.js               # CRUD simulado no navegador
│   └── assets/                    # Imagens e ícones
│
├── backend/                       # API real com Node.js + Express
│   ├── server.js                  # Ponto de entrada do servidor
│   ├── .env                       # Configurações (porta e dados do BD)
│   ├── package.json               # Dependências e scripts do Node
│   ├── sql/create_tables.sql      # Script de criação do banco
│   └── src/
│       ├── config/db.js           # Conexão com MySQL
│       ├── routes/                # Caminhos da API
│       │   ├── userRoutes.js
│       │   ├── categoryRoutes.js
│       │   └── mealRoutes.js
│       ├── controllers/           # Lógica de validação e regras
│       │   ├── userController.js
│       │   ├── categoryController.js
│       │   └── mealController.js
│       ├── models/                # Comunicação direta com o BD
│       │   ├── userModel.js
│       │   ├── categoryModel.js
│       │   └── mealModel.js
│       └── utils/validation.js    # Funções auxiliares (validações)
│
└── README.md                      # Este arquivo (documentação principal)
```

---

## ▶️ Execução

### 🔹 Frontend

1. Abra a pasta `frontend/`.
2. Clique duas vezes em `index.html` ou use uma extensão de servidor local (Live Server no VSCode).
3. Explore as páginas e interações (tudo simulado via JavaScript).

### 🔹 Backend

1. Vá até a pasta `backend/` e instale as dependências:
   ```bash
   yarn install
   ```
2. Configure o arquivo `.env`:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=
   DB_NAME=quasetudogostoso
   PORT=3000
   ```
3. Execute o servidor:
   ```bash
   yarn start
   ```
4. Acesse rotas como:
   - `POST /api/users`
   - `POST /api/categories`
   - `POST /api/meals`

---

## 🛠️ Tecnologias Utilizadas

### 🧩 Frontend

- HTML5, CSS3 (Flexbox e Grid)
- JavaScript (DOM, eventos e LocalStorage)

### ⚙️ Backend

- Node.js + Express
- MySQL

---

## 👥 Equipe

<table>
  <tr align="center">
    <td>
      <a href="https://github.com/diegosilveira94">
        <img src="https://github.com/diegosilveira94.png" width="80" height="80"><br>
        Diego Silveira
      </a>
    </td>
    <td>
      <a href="https://github.com/daniloz-c">
        <img src="https://github.com/daniloz-c.png" width="80" height="80"><br>
        Danilo Cesar
      </a>
    </td>
    <td>
      <a href="https://github.com/arthurhenriqueabreu">
        <img src="https://github.com/arthurhenriqueabreu.png" width="80" height="80"><br>
        Arthur Henrique
      </a>
    </td>
  </tr>
</table>

---

## 📄 Licença

Este projeto tem **fins exclusivamente educacionais** e não possui fins comerciais.  
Uso livre para fins de estudo e aprendizado.
