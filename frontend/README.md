# Quase Tudo Gostoso - Frontend

Site de receitas com HTML, CSS e JavaScript.

## Páginas

- Home, Receitas, Detalhes, Usuário, Admin

## Executar

Abrir `index.html` no navegador ou usar Live Server (VS Code).

## Tecnologias

- HTML5, CSS3, JavaScript

## Equipe

- Diego Silveira
- Danilo Cesar
- Arthur Henrique

**Projeto Acadêmico - 2025**

## 🎨 Páginas Implementadas

### 🏠 Home (`index.html`)

- Banner principal com destaque visual
- Seção "Receitas em Destaque" com 6 receitas carregadas dinamicamente
- Seção "Categorias" com cards de navegação
- Header com logo, menu de navegação e busca integrada

### 📖 Receitas (`pages/receitas.html`)

- Listagem completa de todas as receitas
- Sistema de filtros por:
  - Categoria
  - Dificuldade
  - Tempo de preparo
  - Busca por texto
- Busca local na página
- Integração com busca do header via localStorage
- Cards clicáveis que redirecionam para detalhes

### 🔍 Detalhes da Receita (`pages/detalhe.html`)

- Banner com imagem e título da receita
- Descrição completa e contextualizada
- Informações: dificuldade, tempo de preparo, porções
- Lista de ingredientes
- Modo de preparo passo a passo
- Sistema de comentários:
  - Comentários fictícios pré-carregados (2-3 por receita)
  - Formulário para adicionar novos comentários
  - Data formatada automaticamente

### 👤 Usuário (`pages/usuario.html`)

- Sistema de abas (tabs):
  - Login
  - Cadastro
- Formulários com validação
- Link para recuperação de senha
- Design moderno com transições suaves

### ⚙️ Administração (`pages/admin.html`)

- Painel de gerenciamento com 3 seções:
  - Categorias
  - Ingredientes
  - Utensílios
- Tabelas com dados pré-carregados
- Botões de ação (Editar/Excluir)
- Formulários para adicionar novos itens

## 🗂️ Estrutura de Arquivos

```
frontend/
├── index.html                 # Página principal (raiz)
├── pages/
│   ├── index.html            # Cópia da home (para navegação interna)
│   ├── receitas.html         # Listagem de receitas
│   ├── detalhe.html          # Detalhes da receita
│   ├── usuario.html          # Login/Cadastro
│   └── admin.html            # Painel administrativo
├── css/
│   ├── style.css             # Estilos globais e home
│   ├── receitas.css          # Estilos da página de receitas
│   ├── detalhe.css           # Estilos da página de detalhes
│   ├── usuario.css           # Estilos de login/cadastro
│   └── admin.css             # Estilos do painel admin
├── js/
│   ├── receitas-data.js      # Base de dados centralizada (17 receitas)
│   ├── busca.js              # Sistema de busca no header
│   ├── home.js               # Lógica da página inicial
│   ├── receitas.js           # Filtros e renderização de receitas
│   ├── detalhe.js            # Carregamento de detalhes e comentários
│   ├── usuario.js            # Navegação de tabs login/cadastro
│   ├── admin.js              # Gerenciamento do painel admin
│   └── script.js             # Scripts gerais
└── assets/
    └── img/                  # Imagens locais (logo, ícones)
```

## 🚀 Como Executar

### Opção 1: Live Server (Recomendado)

1. Instale a extensão **Live Server** no VS Code
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"
4. Acesse: `http://127.0.0.1:5500`

### Opção 2: Python HTTP Server

```bash
cd frontend
python -m http.server 8000
```

Acesse: `http://localhost:8000`

### Opção 3: Node HTTP Server

```bash
cd frontend
npx http-server -p 8000
```

Acesse: `http://localhost:8000`

## 💡 Funcionalidades Principais

### 🔎 Sistema de Busca

- **Busca no Header**: Disponível em todas as páginas

  - Detecta automaticamente o caminho (raiz ou /pages/)
  - Redireciona para página de receitas com termo filtrado
  - Utiliza localStorage para transferência de dados

- **Busca Local**: Na página de receitas
  - Filtro em tempo real
  - Busca por título da receita
  - Combinável com outros filtros

### 🎯 Filtros Avançados

- **Categoria**: Pratos Principais, Sobremesas, Saladas, Aves, etc.
- **Dificuldade**: Fácil, Médio, Difícil
- **Tempo**: Até 30min, 60min, 90min, etc.
- **Busca por Texto**: Filtra pelo título da receita
- Botão "Limpar Filtros" para resetar

### 📊 Base de Dados (receitas-data.js)

17 receitas completas com:

- ID único
- Título
- Categoria
- Dificuldade
- Tempo de preparo
- Porções
- **Imagem** (URLs do Unsplash)
- **Descrição detalhada** (contextual e envolvente)
- Lista de ingredientes
- Passos de preparo

**Categorias disponíveis:**

- Pratos Principais
- Sobremesas
- Saladas
- Aves
- Café da Manhã
- Sopas
- Vegano

### 💬 Sistema de Comentários

Cada receita possui 2-3 comentários fictícios pré-carregados:

- Nome do autor
- Texto do comentário
- Data formatada dinamicamente ("Hoje", "3 dias atrás", etc.)
- Possibilidade de adicionar novos comentários

## 🎨 Design e Responsividade

### Características do Design

- ✨ Interface moderna e limpa
- 🎨 Paleta de cores consistente
- 📱 Totalmente responsivo
- 🖼️ Imagens otimizadas via Unsplash CDN
- ⚡ Animações e transições suaves
- 🔤 Tipografia legível e hierarquizada

### Breakpoints Responsivos

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

### Componentes Reutilizáveis

- Header padronizado (todas as páginas)
- Footer padronizado (todas as páginas)
- Cards de receitas (layout grid)
- Tabs (usuário e admin)
- Formulários estilizados

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**:
  - Flexbox e Grid Layout
  - Animações e transições
  - Media queries para responsividade
  - Variáveis CSS (custom properties)
- **JavaScript (Vanilla)**:
  - ES6+ (arrow functions, template literals, destructuring)
  - DOM manipulation
  - localStorage API
  - Event listeners
  - Dynamic rendering

## 📦 Dependências

**Nenhuma!** 🎉

O projeto foi desenvolvido sem frameworks ou bibliotecas externas:

- ❌ Sem jQuery
- ❌ Sem React/Vue/Angular
- ❌ Sem Bootstrap
- ✅ 100% Vanilla JavaScript
- ✅ CSS puro

## 🌐 Fontes Externas

- **Imagens**: [Unsplash](https://unsplash.com) via CDN
  - Todas as receitas usam URLs do Unsplash
  - Otimizadas com parâmetros `w=500&h=350&fit=crop`
  - Sem necessidade de download ou armazenamento local

## 🔄 Navegação

```
Home (/)
├── Receitas (/pages/receitas.html)
│   └── Detalhe (/pages/detalhe.html?id=X)
├── Usuário (/pages/usuario.html)
└── Administração (/pages/admin.html)
```

### Links do Header (todas as páginas):

- Logo → Home
- Home → index.html
- Receitas → pages/receitas.html
- Usuário → pages/usuario.html
- Administração → pages/admin.html

## 🎓 Contexto Acadêmico

Este frontend foi desenvolvido como parte do projeto integrado das disciplinas:

- **Desenvolvimento Web**
- **Sistemas Gerenciadores de Banco de Dados (SGBD)**

**Nível**: 2º ano de graduação  
**Período**: Novembro/2025

## 👥 Equipe de Desenvolvimento

- [Diego Silveira](https://github.com/diegosilveira94)
- [Danilo Cesar](https://github.com/daniloz-c)
- [Arthur Henrique](https://github.com/arthurhenriqueabreu)

## 📝 Observações Importantes

1. **Dados Fictícios**: Todas as receitas, comentários e dados são fictícios e foram criados para fins de demonstração.

2. **Integração Backend**: Atualmente o frontend funciona de forma independente com dados estáticos. A integração com o backend está prevista para fases futuras.

3. **LocalStorage**: Utilizado para transferir o termo de busca do header para a página de receitas. Os dados são temporários e locais ao navegador.

4. **Funcionalidades "Em Desenvolvimento"**:
   - Login/Cadastro (exibem alertas)
   - Painel admin (operações CRUD exibem confirmações)
   - Sistema de comentários (adiciona apenas no frontend)

## 🚧 Próximas Melhorias

- [ ] Integração com API do backend
- [ ] Sistema de autenticação real
- [ ] Upload de imagens de receitas
- [ ] Sistema de favoritos
- [ ] Avaliação de receitas (estrelas)
- [ ] Compartilhamento em redes sociais
- [ ] Modo escuro (dark mode)
- [ ] Impressão de receitas

---

**Desenvolvido para fins acadêmicos - Novembro/2025**
