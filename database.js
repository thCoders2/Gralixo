// Bom aqui é o lugar em que a mágica do jogo acontece
// Pode adicionar a sua fase nesse json grandãozao!
// por favor só não estrague o json matando assim o jogo!
// aqui a documentação para adicionar sua fase coloque dentro de 'play'

//COMEÇO DA DOCUMENTAÇÃO COMEÇO DOCUMENTAÇÃO// DOCUMENTAÇÃO DOCUMENTAÇÃO// DOCUMENTAÇÃO DOCUMENTAÇÃO// DOCUMENTAÇÃO DOCUMENTAÇÃO// DOCUMENTAÇÃO DOCUMENTAÇÃO// DOCUMENTAÇÃO DOCUMENTAÇÃO
// Siga o exemplo abaixo, com atenção!
// FIM DA // DOCUMENTAÇÃO DOCUMENTAÇÃO FIM DA // DOCUMENTAÇÃO DOCUMENTAÇÃOFIM DA // DOCUMENTAÇÃO DOCUMENTAÇÃO

var allPlaysJson = {
    'plays': [
        {'img':'imgs/karma-raiva-acalma.png', 'palavras':['karma', 'raiva', 'acalma']},
        {'img':'imgs/karma-raiva-acalma.png', 'palavras':['karma', 'raiva', 'acalma', 'calma', 'raiz', 'alma']},
        {'img':'imgs/karma-raiva-acalma.png', 'palavras':['arma', 'alma', 'raiva', 'acalma', 'calma', 'raiz', 'alma']},
    ]

}
// to DO list to Do to list LIST to DO
// bom eu quero adicionar o script que adiciona algumas
//  setas pela tela e conforme tu aperta ela tu navega
//   nas fases!

// CONST DE ELEMENTOS HTML
var saveButton = document.getElementById('save');
var submitButton = document.getElementById('submit');
var guessInput = document.getElementById('guess');
var wordList = document.getElementById('word-list');
var winners = document.querySelector('.winnersOff')


// var e variaveis da pagina
var correctWords = ['karma', 'raiva', 'acalma', 'calma', 'alma','raiz' ]; // Palavras corretas do jogo
var guessedWords = []; // Palavras adivinhadas pelo jogador


// FUNÇÕES SIMPLES!

//      uma função simples é aquela que não chama nenhuma outra!
const randomKarma = () => {
    const karmaStyles = ['karma', 'karma-blue', 'karma-konha', 'karmoxa']
    let number = Math.round(Math.random()*5) -1
    console.log(number)
    return karmaStyles[number]
}

// FUNÇÃO, COMPLEXIDADE de 2 a 5
const changeKarma = () => {
    body.className = randomKarma() 
}
const alwaysChangeKarma = () => {
    changeKarma()
    setTimeout(alwaysChangeKarma,500)
}

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
  
// ENMARANHADO DE FUNÇÕES
const addGuessEvent = (htmlTag, evento='click') => {
    htmlTag.addEventListener(evento, () => {
        
    })
    let guess = guessInput.value;
    if (correctWords.includes(guess) && !guessedWords.includes(guess)) {
        guessedWords.push(guess);
        changeKarma()
        updateWordList();
        guessInput.value = '';
    }
}
const addSavePlayerEvent = () =>{

}
const addEvents = () => {

    
    guessInput.addEventListener('keydown', () => {addGuessEvent()});
    submitButton.addEventListener('click', () => { addGuessEvent()});]
    addGuessEvent(guessInput)

    saveButton.addEventListener('click', () => {
        const playerName = playerNameInput.value;
        localStorage.setItem('win',playerName + 'karma-raiva-acalma.png')
        alert('teu nome foi salvo no localStorage, em breve vira atualizações da pagina')
        saveButton.style.display = 'none';
      });
}

export const setupPage = () => {
    addEvents()   
}