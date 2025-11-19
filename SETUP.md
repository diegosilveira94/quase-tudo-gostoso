# 🍽️ Quase Tudo Gostoso - Guia de Uso

## ⚙️ Setup Inicial

### 1. **Instalar Dependências**
```bash
cd backend
npm install
```

### 2. **Configurar Banco de Dados**
Editar o arquivo `backend/.env` com suas credenciais MySQL:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=quase_tudo_gostoso
```

### 3. **Iniciar o Servidor**
```bash
cd backend
npm start
# ou para desenvolvimento com auto-reload:
npm run dev
```

O servidor estará rodando em: **http://localhost:3000**

---

## 📱 Como Usar o Formulário de Conexão

1. Acesse: **http://localhost:3000/pages/conexao-db.html**
2. Preencha as credenciais do MySQL:
   - **Host**: localhost (padrão)
   - **Usuário**: root (ou seu usuário MySQL)
   - **Senha**: deixe em branco se não houver ou digite a sua
   - **Banco de Dados**: quase_tudo_gostoso
   - **Porta**: 3306 (padrão)
3. Clique em **"Conectar ao Banco"**
4. Se conexão bem-sucedida, você verá ✓ Conectado

---

## 🔍 Endpoints Disponíveis

- `POST /api/conexao/testar` - Testar conexão com MySQL
- `POST /api/cadastrar-usuario` - Criar novo usuário
- `GET /api/usuarios` - Listar usuários
- `POST /api/cadastrar-categoria` - Criar categoria
- `GET /api/categorias` - Listar categorias
- `POST /api/cadastrar-refeicao` - Criar refeição
- `GET /api/refeicoes` - Listar refeições

---

## ⚠️ Importante

**NÃO USE Live Server (porta 5500)** para acessar o projeto. Use sempre:
- **http://localhost:3000** (servidor Node.js)

O Live Server não consegue servir as rotas da API `/api/conexao/testar`.

---

## 📂 Estrutura do Projeto

```
backend/
  ├── server.js              # Servidor Express
  ├── package.json           # Dependências
  ├── .env                   # Variáveis de ambiente
  └── src/
      ├── config/
      │   ├── db.js          # Configuração MySQL
      │   └── setup.js       # Setup do banco
      ├── controllers/       # Lógica das rotas
      ├── models/            # Modelos de dados
      └── routes/            # Definição de rotas

frontend/
  ├── index.html             # Página inicial
  ├── css/
  ├── js/
  ├── assets/               # Imagens (logo, ícones)
  └── pages/
      └── conexao-db.html    # Formulário de conexão
```
