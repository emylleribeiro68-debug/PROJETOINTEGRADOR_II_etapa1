# Relatório de Validação — LUMI

## 1. Objetivo

Este documento apresenta os testes realizados sobre a versão atual do sistema LUMI
(protótipo front-end), verificando se as funcionalidades implementadas se comportam
como esperado e identificando pontos de ajuste antes da entrega final.

## 2. Escopo testado nesta entrega

A versão atual do código é um **protótipo front-end** (`index.html`, `estilo.css`,
`codigo.js`), com os dados dos livros armazenados diretamente em um array JavaScript
(sem back-end/banco de dados conectado ainda). Os testes abaixo cobrem exatamente o
que está implementado:

- Exibição do acervo completo de livros na aba Início;
- Alternância entre as abas "Início" e "Descobrir Livro";
- Preenchimento e envio do questionário de preferências;
- Motor de recomendação (cruzamento de gênero e tempo de leitura).

## 3. Metodologia

Os testes funcionais foram feitos por **execução isolada da lógica de recomendação**
(a função de busca do `codigo.js` foi extraída e rodada em ambiente Node.js com todas
as combinações possíveis do formulário), além de leitura/revisão do código para as
partes de interface (troca de abas, renderização dos cards). A validação com usuários
reais está descrita na seção 6 e deve ser preenchida com os dados da sua equipe.

## 4. Funcionalidades do escopo original ainda não implementadas nesta versão

Estas funcionalidades constam no `requisitos.md` do projeto, mas não estão
presentes no código atual (que é só front-end estático):

- Cadastro dinâmico de livros (hoje o acervo é fixo, escrito direto no `codigo.js`);
- Avaliação do livro pelo aluno após a leitura;
- Histórico de recomendações por aluno;
- Ranking dos livros mais recomendados;
- Área do bibliotecário;
- Back-end em Java/Spring Boot e persistência em MySQL (hoje os dados vivem só
  no array em memória do navegador).

## 5. Ajustes recomendados

- Cadastrar mais de um livro por gênero, para que o campo "Tempo" realmente
  influencie a recomendação;
- Adicionar as opções "Terror", "Suspense Psicológico", "Horror" e "Mangá" no
  `<select>` de gênero, já que esses livros existem no acervo;
- Fazer o algoritmo considerar também "Dificuldade" e "Humor" na pontuação da
  recomendação, não só gênero e tempo (para cumprir o RF03 de cruzar várias
  características).

## 5. Conclusão

O protótipo front-end do LUMI atende parcialmente aos requisitos definidos: a
navegação, a exibição do acervo e o fluxo do questionário funcionam corretamente,
mas o motor de recomendação ainda cruza apenas gênero e tempo (e, na prática,
hoje só gênero, pela limitação de 1 livro por gênero selecionável). As
funcionalidades de back-end, avaliação, histórico e ranking permanecem como
trabalho futuro.
