// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div$$ = document.createElement("div");
document.body.appendChild(div$$);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP$$ = document.createElement("div");
const p$$ = document.createElement("p");
document.body.appendChild(divP$$)
divP$$.appendChild(p$$)

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const div3$$ = document.createElement("div");
document.body.appendChild(div3$$);
for (let i = 1; i <= 6; i++) {


    const i = document.createElement("p");
    div3$$.appendChild(i);

}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const parragraph$$ = document.createElement("p");
parragraph$$.textContent = "Soy dinámico!";
document.body.appendChild(parragraph$$);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector("h2.fn-insert-here");
h2$$.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement("ul");
document.body.appendChild(ul$$);


for (const app of apps) {
    const li$$ = document.createElement("li");
    li$$.textContent = app;
    ul$$.appendChild(li$$);
    
}



// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removes$$ = document.querySelectorAll(".fn-remove-me")

for (const remove of removes$$) {
    remove.remove();
}


// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

const divInsert$$ = querySelector("div");
const pMiddle$$ = document.createElement("p");
pMiddle$$.textContent = "Voy en medio!";
insertBefore

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here