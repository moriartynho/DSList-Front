const url = "https://dslist-production-ef68.up.railway.app"

const gamesContainer = document.querySelector("#games-container")

async function findAllGames(){
    
    const response = await fetch(url+"/games")
    console.log(response);

    const data = await response.json();
    console.log(data);

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