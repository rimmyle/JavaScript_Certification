const input = document.getElementById('search-input')
const searchButton = document.getElementById('search-button')
const pokemonName = document.getElementById('pokemon-name')
const pokemonId = document.getElementById('pokemon-id')
const pokemonWeight = document.getElementById('weight')
const pokemonHeight = document.getElementById('height')
const pokemonStats = document.querySelectorAll('.stat')
const spriteContainer = document.getElementById('sprite-container')
const pokemonTypes = document.getElementById('types')


const showInfo = (pokemon) => {
  const {name, id, height, sprites, stats, types, weight} = pokemon
  stats.forEach(({stat, base_stat}) => {
    document.getElementById(stat.name).textContent = base_stat
  })
  pokemonName.textContent = name.toUpperCase()
  pokemonId.textContent = `#${id}`
  pokemonWeight.textContent = `Weight: ${weight}`
  pokemonHeight.textContent = `Height: ${height}`
  const image = document.createElement('div')
  image.innerHTML = `<img src="${sprites.front_default}" id="sprite">`
  spriteContainer.appendChild(image)
  types.forEach(({type}) => {
    const element = document.createElement('div')
  element.innerHTML = `${type.name.toUpperCase()}`
  pokemonTypes.appendChild(element)
  })
  
  
}

const checkForSprite = () => document.getElementById('sprite')

const getPokemon = async () => {
  try {
    const res = await fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + input.value.toLowerCase())
    const pokemon = await res.json()
    showInfo(pokemon)
  } catch (err) {
    alert('Pokemon not found')
  }
}
searchButton.addEventListener('click', () => {
  spriteContainer.innerHTML = ''
  pokemonTypes.innerHTML = ''
  getPokemon()
})
