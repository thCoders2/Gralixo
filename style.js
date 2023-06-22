const title = document.querySelector('h1');
const main = document.querySelector('main')
const body = document.querySelector('body')
const submitButton = document.getElementById('submit');
const guessInput = document.getElementById('guess');
const wordList = document.getElementById('word-list');
const playerNameInput = document.getElementById('player-name');
const saveButton = document.getElementById('save');
const winners = document.querySelector('.winnersOff')

const correctWords = ['karma', 'raiva', 'acalma', 'calma', 'alma','raiz']; // Palavras corretas do jogo
let allDom = [title,
    main,
body,
submitButton,
guessInput,
wordList,
playerNameInput,
saveButton
]
let guessedWords = []; // Palavras adivinhadas pelo jogador
console.log(allDom)

const randomKarma = () => {
    const karmaStyles = ['karma', 'karma-blue', 'karma-konha', 'karmoxa']
    let number = Math.round(Math.random()*5) -1
    console.log(number)
    return karmaStyles[number]
}

const changeKarma = () => {
    body.className = randomKarma() 
}
const alwaysChangeKarma = () => {
    changeKarma()
    setTimeout(alwaysChangeKarma,500)
}
// title.textContent = title.textContent + correctWords.length;
const updateWordList = () => {
  wordList.innerHTML = '';

  guessedWords.forEach(word => {
    const listItem = document.createElement('li');
    listItem.textContent = word;
    wordList.appendChild(listItem);
  });
  if (guessedWords.length === correctWords.length) {
    winners.className = 'winnersOn'
    alwaysChangeKarma()
  }
}

// Evento de clique no botão Enviar
submitButton.addEventListener('click', () => {
    let guess = guessInput.value;
    if (correctWords.includes(guess) && !guessedWords.includes(guess)) {
        guessedWords.push(guess);
        changeKarma()
        updateWordList();
        guessInput.value = '';
  }
});

// Função para atualizar a lista de palavras corretas
    // Evento de clique no botão Salvar
saveButton.addEventListener('click', () => {
  const playerName = playerNameInput.value;
    // Aqui você pode salvar as informações do jogador, como o nome e a pontuação, em algum lugar, como local storage ou enviar para um servidor.
    localStorage.setItem('win',playerName + 'karma-raiva-acalma.png')
    alert('teu nome foi salvo no localStorage, em breve vira atualizações da pagina')
    // playerNameInput.value = '';
    // playerNameInput.style.display = 'none';
  saveButton.style.display = 'none';
});