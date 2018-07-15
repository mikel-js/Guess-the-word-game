let getPuzzle = async (wordCount)=> {
	 let response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
	 
	 if (response.status === 200) {
	 	let data = await response.json()
	 	return data.puzzle
	} else {
		 	throw new Error('Unable to fetch puzzle')
	}
}


export { getPuzzle as default}