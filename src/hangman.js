class Hangman {
	constructor(word, remainingGuesses){
		this.word = word.toLowerCase().split('')
		this.remainingGuesses = remainingGuesses
		this.guessedLetters = []
		this.status = 'playing'
	}
	calculateStatus() {
		let finished = this.word.every((letter)=>this.guessedLetters.includes(letter) || letter === ' ')
		let answer = this.word.join('')
		if (this.remainingGuesses === 0) {
		this.status = 'failed'
		showStat.textContent = `Nice Try! The word was "${answer}"`
		} else if (finished) {
		this.status = 'finished'
		showStat.textContent = `Great job! You guessed it right!`
		} else {
		this.status = 'playing'
		showStat.textContent = `keep on guessing`
		}
	}
	get puzzle() {
		let puzzle = ''
	
		this.word.forEach((letter)=> {
		if(this.guessedLetters.includes(letter) || letter === ' '){
			puzzle += letter
		} else {
			puzzle += '*'
		}
		})
			return puzzle
	}
	makeGuess(guess) {
		guess = guess.toLowerCase()
		let isUnique = !this.guessedLetters.includes(guess)
		let isBadGuess = !this.word.includes(guess)
		let finished = this.word.every((letter)=>this.guessedLetters.includes(letter))

		if(this.status !== 'playing') {
			return 
		}
			
		if (isUnique) {
			this.guessedLetters = [...this.guessedLetters, guess]
		}

		if (isUnique && isBadGuess) {
			this.remainingGuesses--
		}
		this.calculateStatus()
		}
}

export { Hangman as default }