# LUMI — Sistema Inteligente de Descoberta de Livros

## Objetivo

Criar um sistema para ajudar alunos a encontrar livros da biblioteca de acordo com seus interesses, humor, tempo disponível e tipo de leitura que procuram.

## O que é o sistema?

O LUMI será uma plataforma onde o aluno responde algumas perguntas simples sobre o que está procurando.

Por exemplo:

- Quanto tempo você tem para ler?
- Quer uma história curta ou longa?
- Prefere aventura, romance, mistério ou fantasia?
- Quer algo leve ou mais sério?
- Qual nível de dificuldade de leitura você prefere?
- O que você está com vontade de sentir durante a leitura?

Com base nas respostas, o sistema analisará os livros disponíveis na biblioteca e apresentará recomendações que combinam com aquele perfil.

## Diferencial

O sistema não recomendará livros apenas pelo gênero.

Ele poderá cruzar diferentes características dos livros para encontrar combinações mais específicas.

Por exemplo:

> "Quero um livro curto, fácil de ler, com mistério e que seja envolvente."

O sistema poderá encontrar os livros cadastrados que mais se aproximam dessas características.

Além disso, depois da leitura, o aluno poderá avaliar o livro e informar se a recomendação realmente combinou com o que ele procurava.

## Público-alvo

- Alunos;
- Professores;
- Bibliotecários;
- Funcionários da biblioteca.

## Principais funcionalidades

- Cadastro dos livros e suas características;
- Questionário de preferência;
- Sistema de recomendação;
- Busca personalizada;
- Filtros de leitura;
- Avaliação dos livros;
- Histórico de recomendações;
- Ranking dos livros mais recomendados;
- Área para o bibliotecário acompanhar os interesses dos alunos.

## Como será desenvolvido?

- **Front-end:** HTML, CSS e JavaScript;
- **Back-end:** Java e Spring Boot;
- **Banco de dados:** MySQL;
- **Versionamento:** Git e GitHub.

## Resultado esperado

Criar uma biblioteca mais interativa, onde o aluno não precise conhecer o nome de um livro para encontrá-lo.

O sistema ajudará o aluno a descobrir novas leituras de acordo com aquilo que ele realmente está procurando.

**Você não precisa saber qual livro quer. O sistema ajuda você a descobrir.**

## Como executar o projeto

Não há dependências ou instalação de pacotes — é um site estático simples.

1. Clone o repositório:
   ```bash
   git clone <link-do-seu-repositorio>
   ```
2. Entre na pasta do projeto e abra o `index.html` diretamente no navegador
   (duplo clique) **ou**, se preferir usar um servidor local (recomendado para
   evitar bloqueios de CORS em navegadores mais restritos):
   ```bash
   # com a extensão Live Server no VS Code, ou:
   npx serve .
   ```
3. O site abrirá na aba "Início" mostrando o acervo completo.

# RESULTADO FINAL

## Como usar

1. Na tela inicial, clique em **"Fazer o Questionário ✨"** (ou na aba
   "Descobrir Livro");
2. Responda as 4 perguntas sobre tempo disponível, gênero, dificuldade e humor;
3. Clique em **"Encontrar Meu Livro Ideal 🚀"**;
4. O sistema exibirá o livro recomendado com título, autor e sinopse.

## Resultados desta etapa

O protótipo front-end está funcional e navegável de ponta a ponta, cobrindo o
fluxo principal de descoberta de livros descrito na proposta do projeto. Os
testes realizados (ver `/docs/testes.md`) confirmaram o funcionamento da
navegação, da exibição do acervo e do motor de recomendação, além de
identificarem pontos de ajuste para as próximas entregas — em especial a
integração com back-end/banco de dados e o uso completo dos 4 critérios do
questionário na recomendação.

