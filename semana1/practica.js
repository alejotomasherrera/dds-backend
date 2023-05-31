// Variables
let apellidoYnombre = "Juan Lopez";
let cantidadDisponible = 15;
cantidadDisponible = 30;

const PI = 3.141592;
const EDAD = 23;

//Variables: tipos
let a = 25;
typeof 25; /* devuelve: "number" */

let b = new Date(2017,01,01);
typeof b; /* devuelve: "object" */
b.constructor; /* devuelve function Date() { [native code] } */

//conversión a string
String(a);
String(123);
x.toString();
(123).toString();
String(false);
String(true);
false.toString();
true.toString();
String(Date());
Date().toString();

//conversión a number
Number("210"); /* devuelve 210 */
Number("21ax"); /* devuelve NaN */
parseInt("21ax") /* devuelve 21 */
parseInt("aa") /* devuelve NaN */
parseFloat("12.21")
parseFloat("15.aa") /* devuelve 15 */

//Setencias condicionales: if/ if..else
if (condicion) {
    //código que se ejecuta si la condición es verdadera
   } else {
    //código que se ejecuta si la condición es falsa
   }

/// else if
if (condicion1) {
    //código que se ejecuta si la condición1 es verdadera
   } else if (condicion2) {
    //código que se ejecuta si la condición1 es falsa y la
   //condición2 es verdadera
   } else {
    //código que se ejecuta si la condición1 es falsa y la
   //condición2 es falsa
   }

//switch
switch(expresión) {
    case n:
    código
    break;
    case m:
    código
    break;
    default:
    //código por defecto
   }

//sentencias iterativas: for
for (sentencia1; sentencia2; sentencia3) {
    código
   //break;
   //continue;
   }

for (let i = 0; i < Cosas.length; i++) {
    console.log(Cosas[i]);
}

//sentencias iterativas: for in
/* Recorre las propiedades de un objeto */
for (let propiedad in Persona) {
    console.log(Persona[propiedad]);
   }

//while
while (condición) {
    código
   }

do {
    código
} while (condición);

//ARRAYS
let colores = ["Verde","Rojo","Azul"];
let color1 = colores[0];
colores[2] = "Amarillo";

//length, push, pop, unshift, shift, delete, splice(posicion, elemento a remover, nuevo1, nuevo2)
// slice, sort, reverse

//Funciones
function nombre(par1, par2, par3) {
    /* código */
}

function sumar(a,b){
    return a+b;
}
//Invocacion
num = sumar(2,3);
//arrow function
sumar = (a, b) => { return a + b; }
sumar = (a, b) => a + b;

//Objetos: asignacion de propiedades y metodos
let persona = new Object();
persona.nombre = "Juan";
persona.apellido = "Perez";
persona.nombreCompleto = function(){
return this.nombre + " " + this.apellido;
};
//mediante literales
let auto = {marca:"Ford", modelo:"Focus", año:2016};






