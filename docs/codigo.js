// Base de dados atualizada com livros de Terror, Suspense Psicológico, Horror e Mangás
const livros = [
    {
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fantasia",
        tempo: "curto",
        dificuldade: "Fácil",
        humor: "Emocionante",
        sinopse: "Uma jornada poética e filosófica através de asteroides e planetas."
    },
    {
        titulo: "Assassinato no Expresso do Oriente",
        autor: "Agatha Christie",
        genero: "Mistério",
        tempo: "medio",
        dificuldade: "Intermediário",
        humor: "Curioso",
        sinopse: "Um detetive precisa resolver um crime intrigante em um trem isolado."
    },
    {
        titulo: "A Seleção",
        autor: "Kiera Cass",
        genero: "Romance",
        tempo: "medio",
        dificuldade: "Fácil",
        humor: "Leve",
        sinopse: "Trinta garotas concorrem ao coração do príncipe herdeiro em uma competição."
    },
    {
        titulo: "O Iluminado",
        autor: "Stephen King",
        genero: "Terror",
        tempo: "longo",
        dificuldade: "Intermediário",
        humor: "Curioso",
        sinopse: "Uma família se isola em um hotel nas montanhas no inverno, onde forças malignas começam a afetar a sanidade do pai."
    },
    {
        titulo: "A Paciente Silenciosa",
        autor: "Alex Michaelides",
        genero: "Suspense Psicológico",
        tempo: "medio",
        dificuldade: "Intermediário",
        humor: "Curioso",
        sinopse: "Uma mulher atira no marido cinco vezes e nunca mais diz uma palavra, intrigando um psicoterapeuta obcecado pelo caso."
    },
    {
        titulo: "It: A Coisa",
        autor: "Stephen King",
        genero: "Horror",
        tempo: "longo",
        dificuldade: "Avançado",
        humor: "Emocionante",
        sinopse: "Um grupo de crianças enfrenta uma entidade aterrorizante que assume a forma de suas piores fobias, retornando anos depois."
    },
    {
        titulo: "Death Note (Vol. 1)",
        autor: "Tsugumi Ohba",
        genero: "Mangá",
        tempo: "curto",
        dificuldade: "Fácil",
        humor: "Curioso",
        sinopse: "Um estudante encontra um caderno sobrenatural que mata qualquer pessoa cujo nome seja escrito nele."
    }
];

// Carregar os livros na página inicial ao abrir o site
window.onload = function() {
    carregarAcervo();
};

// Alternar abas
function mudarAba(nomeAba) {
    const abas = document.querySelectorAll('.aba');
    abas.forEach(aba => aba.classList.add('oculto'));

    document.getElementById('aba-' + nomeAba).classList.remove('oculto');

    document.getElementById('btn-inicio').classList.remove('ativo');
    document.getElementById('btn-questionario').classList.remove('ativo');
    
    document.getElementById('btn-' + nomeAba).classList.add('ativo');
}

// Exibir todos os livros com suas características na página inicial
function carregarAcervo() {
    const lista = document.getElementById('lista-livros');
    lista.innerHTML = '';

    livros.forEach(livro => {
        const card = document.createElement('div');
        card.className = 'card-livro';
        card.innerHTML = `
            <h4>${livro.titulo}</h4>
            <p class="autor">por ${livro.autor}</p>
            <p class="sinopse">${livro.sinopse}</p>
            <div class="tags">
                <span class="tag">${livro.genero}</span>
                <span class="tag">⏱️ ${livro.tempo}</span>
                <span class="tag">📖 ${livro.dificuldade}</span>
            </div>
        `;
        lista.appendChild(card);
    });
}

// Processar recomendação inteligente cruzando o questionário
function processarRecomendacao(evento) {
    evento.preventDefault();

    const tempo = document.getElementById('q-tempo').value;
    const genero = document.getElementById('q-genero').value;
    const dificuldade = document.getElementById('q-dificuldade').value;
    const humor = document.getElementById('q-humor').value;

    // Tenta achar um livro que combine com o gênero e o tempo
    let encontrado = livros.find(l => l.genero === genero && l.tempo === tempo);

    // Se não achar a combinação exata, pega pelo menos o gênero escolhido
    if (!encontrado) {
        encontrado = livros.find(l => l.genero === genero);
    }
    
    // Se ainda não achar, pega o primeiro da lista
    if (!encontrado) {
        encontrado = livros[0];
    }

    const divResultado = document.getElementById('resultado');
    const textoResultado = document.getElementById('texto-resultado');

    divResultado.classList.remove('oculto');
    textoResultado.innerHTML = `
        <strong>📖 "${encontrado.titulo}"</strong> por ${encontrado.autor}<br>
        <span style="font-size: 0.85rem; color: #555;">${encontrado.sinopse}</span>
    `;
}
