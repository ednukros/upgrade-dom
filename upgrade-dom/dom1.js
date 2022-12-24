// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

const showBtn$$ = document.querySelector(".showme");
console.log(showBtn$$);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

const showH1$$ = document.querySelector("#pillado");
console.log(showH1$$);

// 1.3 Usa querySelector para mostrar por consola todos los p

const allP$$ = document.querySelectorAll("p");
console.log(allP$$);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

const allPokemons$$ = document.querySelectorAll(".pokemon");
console.log(allPokemons$$);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"

const showAtributteTest$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(showAtributteTest$$);

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

const thirdPj$$ = document.querySelectorAll('[data-function="testMe"]');

console.log(thirdPj$$[2])