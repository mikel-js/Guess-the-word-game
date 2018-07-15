import Hangman from './hangman'
import getPuzzle from './request'


let game
let guessLeft = document.querySelector('#guessLeft')
let mysteryWord = document.querySelector('#mysteryWord')

let showRemaining = ()=> {guessLeft.textContent = `You have ${game.remainingGuesses} remaining guess/es left`}
let showMystery  = () => {mysteryWord.textContent = game.puzzle }

window.addEventListener('keypress', (e)=>{
	let guess = String.fromCharCode(e.charCode)
	game.makeGuess(guess)
	render()
})

let render = ()=> {
	mysteryWord.innerHTML =''
	showRemaining()

	game.puzzle.split('').forEach((letter)=> {
		let letterEl = document.createElement('span')
		letterEl.textContent = letter
		mysteryWord.appendChild(letterEl)
	})
}

let startGame = async ()=> {
	let puzzle = await getPuzzle('2')
	game = new Hangman(puzzle, 5)
	render()
	showStat.textContent =''
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()