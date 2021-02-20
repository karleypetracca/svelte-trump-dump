const urlCors = 'https://cors-anywhere.herokuapp.com/'
const urlDomain = 'https://api.tronalddump.io/'
const urlRandomQuote = 'random/quote';
const urlRandomMeme = 'random/meme';

const headers = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json"
  }
}

// Get random quote
export const getRandomQuote = async () => {
  return await fetch(`${urlCors}${urlDomain}${urlRandomQuote}`, headers)
    .then(r => r.json())
    .catch(err => {
      console.log(err)
    })
}

// Get random meme - doesn't work???
export const getRandomMeme = async () => {
  return await fetch(`${urlCors}${urlDomain}${urlRandomMeme}`, headers)
    .then(r => r.json())
    .catch(err => {
      console.log(err)
    })
}