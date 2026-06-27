<p align="center">
  <img src="./frontend/public/favicon.svg" alt="Logo DetailFlow" width="96" />
</p>

<h1 align="center">DetailFlow</h1>

<p align="center">
  Sistema de gestão para empresas de estética automotiva.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-149ECA?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss" alt="Tailwind CSS" />
</p>

## Sobre

O DetailFlow centraliza a operação de uma estética automotiva, facilitando o acompanhamento de clientes, veículos, agendamentos, ordens de serviço, estoque e movimentações financeiras.

## Funcionalidades

- Dashboard operacional responsivo
- Indicadores de agendamentos, serviços e faturamento
- Agenda com navegação por data
- Cadastro e exclusão de agendamentos
- Ordens de serviço com página de detalhes
- Exportação de ordens em PDF com layout A4
- Cadastro e pesquisa de clientes
- Navegação adaptada para desktop e mobile
- Identidade visual própria

## Tecnologias

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- shadcn/ui e Radix UI
- Lucide React
- date-fns
- React Hook Form e Zod
- TanStack Query
- Recharts

## Executando localmente

```bash
git clone URL_DO_REPOSITORIO
cd frontend
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000/dashboard
```

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Estrutura principal

```text
app/                 Rotas e páginas
components/          Componentes reutilizáveis
components/layout/   Cabeçalho, menu e identidade
components/orders/   Componentes das ordens de serviço
lib/                 Dados e utilitários
public/              Logo, favicon e arquivos públicos
```

## Estado atual

O projeto está em desenvolvimento. Os dados utilizados atualmente são temporários e armazenados em memória.

## Próximas etapas

- Integração com PostgreSQL
- Autenticação e permissões
- Persistência de clientes e veículos
- Gestão de produtos e estoque
- Módulo financeiro
- Relatórios e indicadores reais
- Implantação em produção

## Autor

Desenvolvido por **Felipe André**.
