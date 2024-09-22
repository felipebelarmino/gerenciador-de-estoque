# Controle de Estoque - API (Configuração para Windows)

Bem-vindo ao projeto **Controle de Estoque**, uma API robusta desenvolvida em **NestJS** para gerenciar o estoque de um restaurante. Este guia irá orientá-lo na configuração do ambiente Windows, execução da API e conexão ao banco de dados PostgreSQL usando Docker.

## 📚 Sumário

- [Pré-requisitos](#pré-requisitos)
- [Configuração Inicial](#configuração-inicial)
- [Instalação](#instalação)
- [Configuração do Banco de Dados](#configuração-do-banco-de-dados)
- [Executando a API](#executando-a-api)
- [Testando a API](#testando-a-api)
- [Documentação](#documentação)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente Windows:

- [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) (vem com Node.js)
- [Git](https://git-scm.com/downloads)

## Configuração Inicial

1. **Instalar Docker Desktop para Windows**
   - Baixe e instale o [Docker Desktop para Windows](https://www.docker.com/products/docker-desktop)
   - Siga as instruções de instalação e certifique-se de que o Docker está rodando

2. **Instalar Visual Studio Code**
   - Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/)

3. **Instalar extensões recomendadas do Git para VS Code**
   - Abra o VS Code
   - Vá para a seção de extensões (Ctrl+Shift+X)
   - Pesquise e instale as seguintes extensões:
     - GitLens
     - Git History
     - Git Graph

4. **Instalar pgAdmin 4**
   - Baixe e instale o [pgAdmin 4](https://www.pgadmin.org/download/pgadmin-4-windows/)

## Instalação

1. **Clonar o Repositório**
   
   Abra o terminal no VS Code e execute:

   ```bash
   git clone https://github.com/felipebelarmino/gerenciador-de-estoque.git
   cd controle-de-estoque-api
   ```

2. **Instalar Dependências**

   ```bash
   npm install
   ```

## Configuração do Banco de Dados

1. **Iniciar container Docker com PostgreSQL**

   Execute o seguinte comando no terminal (tudo em uma linha):

   ```bash
   docker run --name meu_postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=senha123 -e POSTGRES_DB=controle_estoque -p 5432:5432 -v %USERPROFILE%\postgres-data:/var/lib/postgresql/data -d postgres
   ```

2. **Conectar ao banco de dados com pgAdmin 4**
   - Abra o pgAdmin 4
   - Clique com o botão direito em "Servers" e selecione "Create" > "Server"
   - Na aba "General", dê um nome para a conexão (ex: "Controle de Estoque Local")
   - Na aba "Connection", preencha:
     - Host: localhost
     - Port: 5432
     - Maintenance database: controle_estoque
     - Username: admin
     - Password: senha123
   - Clique em "Save"

3. **Executar Migrações e Seeds**

   No terminal do VS Code, execute:

   ```bash
   npm run typeorm migration:run
   npm run seed:run
   ```

## Executando a API

1. **Configurar Variáveis de Ambiente**

   Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=admin
   DB_PASSWORD=senha123
   DB_DATABASE=controle_estoque
   PORT=3000
   ```

2. **Iniciar a Aplicação**

   ```bash
   npm run start
   ```

   A API estará rodando em `http://localhost:3000/api`.

## Testando a API

Use o Postman, Insomnia ou outro cliente REST para testar as rotas. Exemplo:

```http
GET http://localhost:3000/api/users
```

## Documentação

Acesse a documentação Swagger em:

```
http://localhost:3000/api
```

## Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin feature/nova-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

👤 **Seu Nome**

- LinkedIn: [Seu Perfil](https://www.linkedin.com/in/felipe-belarmino/)
- GitHub: [@seu-usuario](https://github.com/felipebelarmino)
- E-mail: epilefgomes1@gmail.com

✨ Feito com dedicação e código limpo!

---

Obrigado por conferir este projeto! Se você gostou, deixe uma estrela ⭐ no repositório.
