# 🍽️ Quase Tudo Gostoso

Sistema de gerenciamento de receitas culinárias desenvolvido para as disciplinas de Desenvolvimento Web e SGBD.

## 👥 Equipe

- [Nome do Aluno 1]
- [Nome do Aluno 2]
- [Nome do Aluno 3]

## 🛠️ Tecnologias

- **Backend:** Node.js + Express + MySQL
- **Frontend:** HTML + CSS + JavaScript
- **Gerenciador:** Yarn

## 🚀 Como Executar

### Pré-requisitos

- Node.js (v16+)
- Yarn (`npm install -g yarn`)
- XAMPP (MySQL)

### Passo a Passo

1. **Clone o repositório**

```bash
git clone [url-do-repositorio]
cd quase-tudo-gostoso
```

2. **Configure o .env**

```bash
cd backend
cp .env.example .env
```

Edite o `.env` com suas credenciais MySQL:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=quasetudogostoso
PORT=3000
```

3. **Instale as dependências**

```bash
yarn install
```

4. **Configure o banco de dados**

- Inicie o MySQL no XAMPP
- Execute o setup:

```bash
yarn db:setup
```

5. **Inicie o servidor**

```bash
yarn start
```

6. **Acesse o sistema**

- Abra: `http://localhost:3000/pages/cadastro-usuario.html`

## 📝 Funcionalidades

- Cadastro de Usuários
- Cadastro de Categorias
- Cadastro de Tipos de Refeições
- API REST completa

## 📚 Endpoints

- `POST /api/cadastrar-usuario` - Cadastrar usuário
- `GET /api/usuarios` - Listar usuários
- `POST /api/cadastrar-categoria` - Cadastrar categoria
- `GET /api/categorias` - Listar categorias
- `POST /api/cadastrar-refeicao` - Cadastrar refeição
- `GET /api/refeicoes` - Listar refeições

## 🧪 Dados de Teste

O comando `yarn db:setup` já insere dados fictícios para testes.

---

**Desenvolvido para fins acadêmicos - Novembro/2025**
