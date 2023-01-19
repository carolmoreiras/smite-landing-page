
 const zeus = {
  nome: "Zeus",
  panteao: "Greek",
  free: false,
  classe: "Magical",
  imagesrc: "/assets/gods-cards/zeus.jpg",
  favorCost: 5500,
  habilidades: ["Overcharge", "Chain Lightning", "Aegis Assault", "Detonate Charge", "Lightning Storm"]
}

const poseidon = {
  nome: "Poseidon",
  panteao: "Greek",
  free: true,
  classe: "Magical",
  imagesrc: "/assets/gods-cards/poseidon.webp",
  favorCost: 0,
  habilidades: ["Changing Tides", "Tidal Surge", "Trident", " Whirlpool", "Release the Kraken!"]
}

const neith = {
  nome: "Neith",
  panteao: "Egyptian",
  free: true,
  classe: "Hunter",
  imagesrc: "/assets/gods-cards/neith.webp",
  favorCost: 0,
  habilidades:["Broken Weave", "Spirit Arrow", "Unravel", "Back Flip",  "World Weaver"]
}

const aphrodite = {
  nome: "Aphrodite",
  panteao: "Greek",
  free: false,
  classe: "Magical",
  imagesrc: "/assets/gods-cards/aphrodite.webp",
  favorCost: 5500,
  habilidades:["Kiss", "Back Off!", "Love Birds", "Undying Love",  "Center of Attention"]
}

const hades = {
  nome: "Hades",
  panteao: "Greek",
  free: false,
  classe: "Magical",
  imagesrc: "/assets/gods-cards/hades.jpg",
  favorCost: 2000,
  habilidades:["Death From Below", "Shroud of Darkness", "Devour Souls", "Pillar of Agony",  "Blight"]
}

const bastet = {
  nome: "Bastet",
  panteao: "Egyptian",
  free: false,
  classe: "Physical",
  imagesrc: "/assets/gods-cards/bastet.jpg",
  favorCost: 5500,
  habilidades:["Pounce", "Razor Whip", "Ensnaring Claw", "Huntress of Bast",  "Nightstalker"]
}

const thor = {
  nome: "Thor",
  panteao: "Norse",
  free: false,
  classe: "Physical",
  imagesrc: "/assets/gods-cards/thor.webp",
  favorCost: 5500,
  habilidades:["Mjolnir's Attunement", "Tectonic Rift", "Berserker Barrage", "Anvil of Dawn",  "Warrior's Madness"]
}

const cupid = {
  nome: "Cupid",
  panteao: "Roman",
  free: false,
  classe: "Physical",
  imagesrc: "/assets/gods-cards/cupid.webp",
  favorCost: 1500,
  habilidades:["Heart Bomb", "Share the Love", "Flutter", "Fields of Love",  "Lovestruck"]
}

const change = {
  nome: "Chang'e",
  panteao: "chinese",
  free: false,
  classe: "Magical",
  imagesrc: "/assets/gods-cards/change.webp",
  favorCost: 5500,
  habilidades:["Crescent Moon Dance", "Moonlit Waltz", "Moonflower Dance", "Waxing Moon",  "Jade Rabbit"]
}

const set = {
  nome: "Set",
  panteao: "egyptian",
  free: false,
  classe: "Physical",
  imagesrc: "/assets/gods-cards/set.jpg",
  favorCost: 5500,
  habilidades:["Skewer", "Spawn of Set", "Sandstorm", "Kingslayer",  "Relentless"]
}

const nuwa = {
  nome: "Nu Wa",
  panteao: "Chinese",
  free: true,
  classe: "Magical",
  imagesrc: "/assets/gods-cards/nu-wa.jpg",
  favorCost: 0,
  habilidades:["Mysterious Fog", "Clay Soldiers", "Shining Metal", "Fire Shards",  "Strength of Wood"]
}

const loki = {
  nome: "Loki",
  panteao: "Norse",
  free: false,
  classe: "Physical",
  imagesrc: "/assets/gods-cards/loki.jpg",
  favorCost: 5500,
  habilidades:["Vanish", "Agonizing Visions", "SFlurry Strike", "Assassinate",  "Behind You!"]
}

const deuses = [zeus, poseidon, neith, aphrodite, hades, bastet, thor, cupid, change, set, nuwa, loki]

console.log(deuses)

let totalFavorCost = 0
let freeGods = []

for (let index = 0; index < deuses.length; index++) {
  const element = deuses[index];
  totalFavorCost += element.favorCost

 if (element.free) {
    freeGods.push(element.nome)
 }
}

const mediaFavorCost = totalFavorCost / deuses.length
console.log("Média de favor cost", mediaFavorCost)

console.log("deuses gratuitos", freeGods)

const createCards = (arrayGods) => {
  for (let index = 0; index < arrayGods.length; index++) {
    const deus = arrayGods[index];
    const novoElemento = document.createElement("li")
    novoElemento.setAttribute("class", "card")
    novoElemento.innerHTML = `
      <img src=${deus.imagesrc} alt="">
      <div class="card-content">
        <h3>${deus.nome}</h3>
        <p>${deus.panteao}</p>
      </div>
    `
    document.getElementById("search-result").appendChild(novoElemento)
  }
}

createCards(deuses)

const searchGod = () => {
  const searchValue = document.getElementById("search").value
  document.getElementById("search-result").innerHTML = ""

  if (searchValue === "") {
    alert("Faça uma busca válida")
    createCards(deuses)
    return
  } 

  const filteredGods = deuses.filter(deus => deus.nome.toLowerCase() === searchValue.toLowerCase())
  
  if (filteredGods.length) {
    createCards(filteredGods)
  }else{
    createCards(deuses)
    alert("Nenhum resultado encontrado")
  }
 
}

const inputElement = document.getElementById("search")


inputElement.addEventListener("keypress", event => {
  if(event.key === 'Enter') {
    searchGod()
  }
});