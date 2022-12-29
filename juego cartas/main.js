//Recuperar la lista con el id "podekex" y almacenarla en una variable.

let urlPokemon = `https://rickandmortyapi.com/api/character`;

const getPokemons = async (url) => { //peticion


    // try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)

        dataPokemons(results.results)
    // } catch (error) {

    //     console.log(error)
    //     console.log("Algo falló en la petición :(");

    // }






}
const dataPokemons = async () => {
    // try {

        

        for (let i = 1; i <= 40; i++) {

            let id = i;
            const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            // const resp = await fetch(urlPokemon + i); 
            const resul = await resp.json();


            //console.log(resul)

           
            const divImages = document.querySelector("#pokedex");
            const container$$ = document.querySelector(".container")


            
            
            //const li$$ = document.createElement("li");
            
            const h2$$ = document.createElement('h2');
            h2$$.textContent = resul.name;
            const imageContainer$$ = document.createElement('div');
            const img$$ = document.createElement('img');
            img$$.src = resul.image;
            const id$$ = document.createElement('h3');
            id$$.textContent = resul.id;
            const types$$ = document.createElement('div');
            const nameType0$$ = document.createElement('span');
            
            imageContainer$$.setAttribute("class", "imageContainer");
            img$$.setAttribute("class", "image");
          

            divImages.appendChild(imageContainer$$);
            imageContainer$$.appendChild(img$$);
            //li$$.appendChild(id$$);
            
            //li$$.appendChild(types$$);
            //types$$.appendChild(nameType0$$);
            //types$$.appendChild(nameType1$$);
            //ol$$.appendChild(li$$);
            container$$.appendChild(imageContainer$$)
        }
    // } catch (error) {

    //     console.log(error)
    // }

}

//https://rickandmortyapi.com/api/character/10


function init() {
    getPokemons(urlPokemon)
}

window.onload = init;


