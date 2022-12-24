const users = [{
        name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {
                format: 'mp3',
                volume: 50
            },
            rain: {
                format: 'ogg',
                volume: 60
            },
            firecamp: {
                format: 'mp3',
                volume: 80
            },
        }
    },
    {
        name: 'Mortadelo',
        favoritesSounds: {
            waves: {
                format: 'mp3',
                volume: 30
            },
            shower: {
                format: 'ogg',
                volume: 55
            },
            train: {
                format: 'mp3',
                volume: 60
            },
        }
    },
    {
        name: 'Super Lopez',
        favoritesSounds: {
            shower: {
                format: 'mp3',
                volume: 50
            },
            train: {
                format: 'ogg',
                volume: 60
            },
            firecamp: {
                format: 'mp3',
                volume: 80
            },
        }
    },
    {
        name: 'El culebra',
        favoritesSounds: {
            waves: {
                format: 'mp3',
                volume: 67
            },
            wind: {
                format: 'ogg',
                volume: 35
            },
            firecamp: {
                format: 'mp3',
                volume: 60
            },
        }
    },
]

//en esta variable contamos el numero de volumenes que tenemos en total
let contador = 0;
//aqui sumamos todos los volumenes
let sum = 0;

//cremos un forof para obtener cada usuario de nuesro array/lista de usuario
for (const user of users) {

    //forin para acceder a cada clave de cada sonido
    for (const key in user.favoritesSounds) {
        //creamos en la variable volumen para guardar cada uno de los volumenes,
        //gracias a nuestra key utilizando user.favoritesSounds[key].volume;
        let volumen = user.favoritesSounds[key].volume;
        sum += volumen;
        contador++;

    }
}

console.log("La suma de todos los volumenes es: " + sum);
console.log("El numero total de volumenes: " + contador);
console.log("La media es: " + sum / contador);