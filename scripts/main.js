//Creazione dell'array con la lista della spesa
const listaSpesa = [
    "pane",
    "insalata",
    "mandarini",
    "frutta",
    "lattuga",
    "manico della scopa",
    "olive",
    "piadine",
    "cotto",
    "speck",
    "farina",
    "salame",
    "carciofi",
    "asparagi",
    "olio",
    "sgrassatore",
    "dentifircio",
    "tabacco",
    "pepe",
    "carne",
    "coltello piccolo",
    "patatine",
    "spazzolini",
    "ammorbidente"
];
//Ciclo for da stampare in console
/*for (let i = 0; i < listaSpesa.length; i++) {
    console.log(listaSpesa[i]);
}*/

//Ciclo while per stampare in console
/*let i = 0;
while (i < listaSpesa.length) {
    console.log(listaSpesa[i]);
    i++;
}*/

let i = 0;
const ulElement = document.getElementById('listaSpesa');

while (i < listaSpesa.length) {
    const li = document.createElement('li'); // Creazione di un nuovo elemento li
    li.textContent = listaSpesa[i]; // Impostazione del testo dell'elemento li
    ulElement.appendChild(li); 
    i++;
}