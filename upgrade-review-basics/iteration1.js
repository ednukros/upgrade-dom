const movies = [{
        title: 'Madaraspar',
        duration: 192,
        categories: ['comedia', 'aventura']
    },
    {
        title: 'Spiderpan',
        duration: 122,
        categories: ['aventura', 'aventura']
    },
    {
        title: 'Solo en Whatsapp',
        duration: 223,
        categories: ['comedia', 'thriller']
    },
    {
        title: 'El gato con guantes',
        duration: 111,
        categories: ['comedia', 'aventura', 'animación']
    },
]

//creamos un array donde vamos a guardar todas las categorias
const arr = [];

//creamos bucle que nos saque cada pelicula de nuestra lista de peliculas
for (let movie of movies) {
    //creamos bucle que nos saca las categorias de la lista de cada pelicula
    for (let categorie of movie.categories) {
        //comprobamos que no exitan categorias dentro del array y de no existir lo añadimos
        if (!arr.includes(categorie)) {
            arr.push(categorie);
        }
    }
}

console.log(arr);