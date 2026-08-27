Arquitetura da SoluÃ§Ã£o â€” LUMI (Sistema Inteligente de Descoberta de Livros)

## 1. Fluxo do sistema

```mermaid
flowchart TD
    A[UsuÃ¡rio] --> B{Login / Cadastro}
    B --> C[Responder questionÃ¡rio de preferÃªncias]
    C --> D[Sistema de recomendaÃ§Ã£o]
    D --> E[(Banco de dados de livros)]
    E --> D
    D --> F[Exibir livros recomendados]
    F --> G[Aluno lÃª o livro]
    G --> H[Avaliar recomendaÃ§Ã£o]
    H --> I[(Banco de dados)]
    I --> J[Atualizar ranking e histÃ³rico]
    J --> K[BibliotecÃ¡rio acompanha interesses da turma]
```

## 2. Arquitetura em camadas

```mermaid
graph LR
    Frontend[Frontend - HTML/CSS/JS] --> API[Backend API - Spring Boot]
    API --> Auth[MÃ³dulo de autenticaÃ§Ã£o]
    API --> Livros[MÃ³dulo de acervo de livros]
    API --> Quest[MÃ³dulo de questionÃ¡rio]
    API --> Rec[MÃ³dulo de recomendaÃ§Ã£o]
    API --> Aval[MÃ³dulo de avaliaÃ§Ã£o]
    API --> Painel[MÃ³dulo do bibliotecÃ¡rio]
    Auth --> DB[(Banco de dados MySQL)]
    Livros --> DB
    Quest --> DB
    Rec --> DB
    Aval --> DB
    Painel --> DB
```

## 3. Modelo de dados (entidades principais)

```mermaid
erDiagram
    USUARIO ||--o{ RESPOSTA_QUESTIONARIO : responde
    USUARIO ||--o{ AVALIACAO : realiza
    USUARIO ||--o{ RECOMENDACAO : recebe
    LIVRO ||--o{ RECOMENDACAO : gera
    LIVRO ||--o{ AVALIACAO : recebe
    USUARIO {
        int id PK
        string nome
        string email
        string papel "aluno, professor, bibliotecario, funcionario"
    }
    LIVRO {
        int id PK
        string titulo
        string autor
        string genero
        int tempo_leitura_estimado
        string nivel_dificuldade
        string tom "leve ou serio"
        string emocao_transmitida
        int total_recomendacoes
    }
    RESPOSTA_QUESTIONARIO {
        int id PK
        int usuario_id FK
        int tempo_disponivel
        string genero_preferido
        string nivel_dificuldade
        string tom_desejado
        string emocao_desejada
        date data_resposta
    }
    RECOMENDACAO {
        int id PK
        int usuario_id FK
        int livro_id FK
        float compatibilidade
        date data_recomendacao
    }
    AVALIACAO {
        int id PK
        int usuario_id FK
        int livro_id FK
        int nota
        boolean combinou_com_busca
        string comentario
        date data_avaliacao
    }
```

## 4. Justificativa das escolhas

- **Frontend em HTML, CSS e JavaScript**: garante uma interface leve e acessÃ­vel, funcionando bem em computadores e dispositivos da biblioteca escolar.
- **Backend em Java com Spring Boot**: fornece uma estrutura robusta e organizada para lidar com as regras de negÃ³cio do sistema de recomendaÃ§Ã£o.
- **MÃ³dulo de autenticaÃ§Ã£o**: diferencia o acesso entre aluno, professor, bibliotecÃ¡rio e funcionÃ¡rio, protegendo os dados de login.
- **MÃ³dulo de acervo de livros**: mantÃ©m o cadastro dos livros com suas caracterÃ­sticas (gÃªnero, tempo de leitura, nÃ­vel de dificuldade, tom, emoÃ§Ã£o transmitida), permitindo cruzamentos mais especÃ­ficos do que uma busca por gÃªnero simples.
- **MÃ³dulo de questionÃ¡rio**: coleta as preferÃªncias do aluno (tempo disponÃ­vel, humor, tipo de leitura desejada) para alimentar o motor de recomendaÃ§Ã£o.
- **MÃ³dulo de recomendaÃ§Ã£o**: cruza as respostas do questionÃ¡rio com as caracterÃ­sticas dos livros cadastrados, calculando a compatibilidade e sugerindo os tÃ­tulos mais prÃ³ximos do perfil buscado.
- **MÃ³dulo de avaliaÃ§Ã£o**: permite que o aluno avalie se a recomendaÃ§Ã£o combinou com o que procurava, gerando dados que ajudam a refinar futuras recomendaÃ§Ãµes.
- **MÃ³dulo do bibliotecÃ¡rio**: oferece um painel para acompanhar os interesses dos alunos, o ranking dos livros mais recomendados e o histÃ³rico de recomendaÃ§Ãµes, apoiando decisÃµes de acervo.
- **Banco de dados MySQL**: estrutura relacional adequada para armazenar usuÃ¡rios, livros, respostas, recomendaÃ§Ãµes e avaliaÃ§Ãµes de forma organizada e consultÃ¡vel.
- **Versionamento com Git e GitHub**: garante controle de versÃµes do cÃ³digo e colaboraÃ§Ã£o entre os desenvolvedores do projeto.
- **Link para o Trello** https://trello.com/b/shVJDuF9/lumi
