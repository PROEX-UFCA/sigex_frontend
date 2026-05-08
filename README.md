# SIGEx — Sistema Integrado de Gestão de Extensões

Portal da UFCA para consulta pública e gestão administrativa de projetos de extensão universitária. Permite que qualquer pessoa navegue pelo catálogo de projetos e que usuários autenticados (estudantes e instituições) acessem funcionalidades exclusivas.

---

## Stack

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 + TypeScript |
| Roteamento | React Router v7 |
| Estilização | TailwindCSS v4 + shadcn/ui |
| Componentes UI | Radix UI + Lucide React |
| Requisições HTTP | Axios |
| Carrossel | Embla Carousel |
| Data/Hora | date-fns + react-day-picker |
| Build | Vite 7 |
| Servidor (prod) | Nginx 1.27 via Docker |

---

## Pré-requisitos

- Node.js 22+
- npm 10+
- Docker (apenas para build de produção)

---

## Execução Local

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/sigex-frontend.git
cd sigex-frontend

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Outros scripts disponíveis:

```bash
npm run build   # compila TypeScript e gera o bundle de produção
npm run preview # serve o bundle de produção localmente
npm run lint    # roda o ESLint
```

---

## Build com Docker

A imagem usa um build multi-stage: compila com Node 22 e serve com Nginx 1.27.

```bash
# Build da imagem
docker build -t sigex_frontend .

# Rodar o container
docker run -p 80:80 sigex_frontend
```

O Nginx está configurado para SPA: qualquer rota desconhecida redireciona para `index.html`, garantindo que o React Router funcione corretamente.

---

## Variáveis de Ambiente

| Variável | Descrição | Padrão atual |
|----------|-----------|--------------|
| `VITE_API_URL` | URL base da API backend | `https://sigex.danielnasc.com.br/api` |

Crie um arquivo `.env.local` na raiz para sobrescrever localmente:

```env
VITE_API_URL=http://localhost:8000/api
```

---

## Estrutura do Projeto

```
src/
├── contexts/
│   └── AuthContext.tsx       # Contexto global de autenticação (role: institution | student | null)
├── components/
│   ├── ui/                   # Componentes base do shadcn/ui (Button, Card, Sheet, etc.)
│   ├── BigProject.tsx        # Card expandido de projeto
│   ├── SmallProject.tsx      # Card compacto de projeto (listagem)
│   ├── ProjectGallery.tsx    # Galeria de imagens do projeto
│   ├── FilterDialog.tsx      # Modal de filtros de busca
│   ├── Tags.tsx              # Badges de categoria com ícone e cor
│   ├── TopBar.tsx            # Barra de navegação superior
│   ├── MenuToggle.tsx        # Menu lateral (Sheet) responsivo
│   ├── ContactArea.tsx       # Seção de contato
│   └── Footer.tsx            # Rodapé
├── features/
│   ├── Filters/
│   │   └── DateFilter.tsx    # Filtro de intervalo de datas
│   ├── LandingPage/
│   │   ├── MainCarousel.tsx  # Carrossel principal da landing
│   │   └── SmallCarousel.tsx # Carrossel secundário por categoria
│   └── SearchPage/
│       ├── Results.tsx       # Lista de resultados da busca
│       └── SearchPagination.tsx # Paginação dos resultados
├── hooks/
│   ├── useSearch.ts          # Gerencia termo de busca e navegação
│   ├── useScreenSize.ts      # Retorna largura/altura da janela em tempo real
│   └── useScrollToTop.ts     # Scroll automático ao trocar de rota
├── pages/
│   ├── LandingPage.tsx       # Página inicial (pública)
│   ├── SearchPage.tsx        # Página de busca e listagem (pública)
│   ├── ProjectPage.tsx       # Detalhes de um projeto (pública)
│   └── LoginPage.tsx         # Login e cadastro (fora do layout principal)
├── services/
│   ├── api.ts                # Instância configurada do Axios
│   └── projectServices.ts    # Funções de acesso à API
├── types/
│   ├── project.ts            # Interfaces Project, ProjectProps, ProjectImages
│   ├── filters.ts            # Interface ProjectFilters
│   ├── tags.ts               # Interfaces TagAttributes, TagProps
│   ├── pageData.ts           # Interface PageData (paginação)
│   └── index.ts              # Re-exports centralizados
├── utils/
│   ├── constants.ts          # CATEGORIES — mapa de áreas temáticas com ícone e cor
│   ├── tagRecognition.ts     # Converte strings de área temática em TagAttributes
│   ├── getPaginationRange.ts # Calcula intervalo de páginas visíveis
│   ├── hashId.ts             # Utilitário de hash de IDs
│   └── images.ts             # Helpers para URLs de imagens
└── lib/
    ├── utils.ts              # Utilitário cn() para merge de classes Tailwind
    ├── breakpoints.ts        # Constantes de breakpoints
    └── scrollToTop.ts        # Função utilitária de scroll
```

---

## Rotas

| Rota | Página |
|------|--------|
| `/` | LandingPage |
| `/search/:term?` | SearchPage |
| `/projects/:id` | ProjectPage |
| `/login` | LoginPage |

---

## Autenticação

O estado de autenticação é gerenciado pelo `AuthContext` e acessado via hook `useAuth()`. Os papéis disponíveis são:

| Role | Descrição |
|------|-----------|
| `null` | Usuário não autenticado |
| `student` | Estudante autenticado |
| `institution` | Representante de instituição autenticado |

> ⚠️ A autenticação atual é **temporária** (credenciais fixas em memória). A integração com a API de autenticação está pendente.

---

## Como Contribuir

### Nomeação de Branches

O projeto segue o [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow):

| Branch | Padrão | Descrição |
|--------|--------|-----------|
| **Feature** | `feature/nome-da-feature` | Nova funcionalidade |
| **Hotfix** | `hotfix/nome-do-hotfix` | Correção urgente em produção |
| **Release** | `release/x.x.x` | Preparação de nova versão |
| **Support** | `support/nome-do-suporte` | Manutenção de versões antigas |
| **Develop** | `develop` | Branch de desenvolvimento — alvo dos PRs |
| **Main** | `main` | Branch de produção |

Exemplos:
```
feature/pagina-de-perfil
hotfix/correcao-filtro-data
release/1.2.0
```

### Pull Requests

- O PR deve sempre ter como alvo a branch `develop` (exceto hotfixes críticos)
- Descreva claramente o que foi alterado e o motivo
- Adicione prints ou gravações de tela quando houver mudanças visuais

> ⚠️ **Atenção:** ao abrir um PR para `develop` ou `main`, o pipeline de CI roda o build via Docker automaticamente. Verifique se o build passou antes de solicitar revisão para evitar quebras no ambiente de produção.