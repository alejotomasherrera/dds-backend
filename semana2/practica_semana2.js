//js sincrono
console.log("Inicio proceso");
function procesoSecundario() {
 console.log("Etapa 2 del proceso");
}
function procesoPrincipal() {
 console.log("Etapa 1 del proceso");
 procesoSecundario(); //llamada síncrona
 console.log("Etapa 3 del proceso");
}
procesoPrincipal();
console.log("Fin");

//Mecanismos asincronos en js
// callbacks, promises, Async/Await
setTimeout(function() {console.log("Han pasado 3 segundos");}, 3000);
// retraso en milisegundos

//Ejemplo de llamada asíncrona con setTimeout
function mensaje() {
    console.log('Proceso asíncrono que se ejecuto a las ' +
   (new Date()).toLocaleTimeString());
   }
   console.log("Inicio a las " + (new Date()).toLocaleTimeString());
   setTimeout(mensaje, 2000);
   console.log("Fin a las " + (new Date()).toLocaleTimeString());

//Callbacks
function leerArchivo(callback) {
    // Simulando lectura de archivo
    setTimeout(() => {
    const resultado = 'Contenido del archivo';
    callback(resultado);
    }, 1000);
    }
    leerArchivo((contenido) => {
    console.log(contenido);});

//Promesas
function leerArchivo() {
    return new Promise((resolve, reject) => {
    // Simulando lectura de archivo
        setTimeout(() => {
        const resultado = 'Contenido del archivo';
        resolve(resultado);
        }, 1000);
    });
    }
    leerArchivo()
        .then((contenido) => {
        console.log(contenido);
        })
    .catch((error) => {
    console.error(error);
    });


//Promesa - metodo fetch para obtener datos con http
let pokemones = fetch("https://pokeapi.co/api/v2/pokemon/1");
pokemones.then(res => {
    if (res.ok)
        return res.json();
    else
        throw new Error(`HTTP error! Status: ${res.status}`);
 })
 .then(data => {
    console.log(data.name);
 }).catch(error => console.log(`Ocurrio un error ${error}`));
   
//Llamadas anidadas
function obtener_pokemon(id){
    let url = "https://pokeapi.co/api/v2/pokemon/" + id;
    return fetch(url).then(res => {return res.json()});
}
obtener_pokemon(1).then(data => {
    console.log(data.name);
    return obtener_pokemon(2);
}).then(data =>{
    console.log(data.name);
    return obtener_pokemon(3);
}).then(data =>{
    console.log(data.name);
    return obtener_pokemon(4);
}).then(data =>{
    console.log(data.name);
})

//Async - Await
async function fetchData(url) {
    try {
        const response = await fetch(url);
        
    if (!response.ok) {
        throw new Error(`Error en la solicitud:
${response.status}`);
    }
        const data = await response.json();
        console.log('Datos recibidos:', data);
    } catch (error) {
        console.error('Error al realizar la solicitud:',
    error);
    }
}
fetchData('https://pokeapi.co/api/v2/pokemon/');