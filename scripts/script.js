const url = "https://dslist-production-ef68.up.railway.app"

const gamesContainer = document.querySelector("#games-container")
const gameListContainer = document.querySelector("#game-list-container")

const urlSearchParams = new URLSearchParams(window.location.search)
const gameId = urlSearchParams.get("id")

const gamePage = document.querySelector("#game")
const gameContainer = document.querySelector("#game-container")

async function findAllGames(){
    
    const response = await fetch(url+"/games")
    

    const data = await response.json();
    

    data.map((game)=>{
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const year = document.createElement("h2");
        const imgUrl = document.createElement("img");
        const shortDescription = document.createElement("p");
        const link = document.createElement("a");

        div.setAttribute("class", "games__container")
        div.setAttribute("class", "img-thumbnail")
        div.setAttribute("class", "img-fluid")
        div.setAttribute("class", "card-body")

        title.innerText = game.title;
        title.setAttribute("class", "titulo__game")

        year.innerText = game.year;
        year.setAttribute("class", "ano__game")

        imgUrl.setAttribute("src", game.imgUrl);
        imgUrl.setAttribute("class", "img-thumbnail")

        shortDescription.innerText = game.shortDescription;
        shortDescription.setAttribute("class", "descricao__game")

        link.innerText = "Abrir";
        
        link.setAttribute("href", `game.html?id=${game.id}`);

        div.appendChild(title)
        div.appendChild(year)
        div.appendChild(imgUrl)
        div.appendChild(shortDescription)
        div.appendChild(link)

        gamesContainer.appendChild(div);

    })
}

findAllGames();

async function findAllGameLists(){
    
    const response = await fetch(url+"/lists")
    const data = await response.json();

    console.log(data)

    data.map((list =>{
        const div = document.createElement("div");
        const name = document.createElement("h2");
        const link = document.createElement("a");

        div.setAttribute("class", "games__container")
        div.setAttribute("class", "card-body")

        name.innerText = list.name;
        name.setAttribute("class", "titulo__game")

        link.innerText = "Abrir";
        
        link.setAttribute("href", `list.html?id=${list.id}`);

        div.appendChild(name)
        div.appendChild(link)

        gameListContainer.appendChild(div)

    }))
}

findAllGameLists();

async function findGameById(id){

    const response = await fetch(`${url+"/games/"}/${id}`)

    const data = await response.json()

    console.log(data)
}

findGameById()