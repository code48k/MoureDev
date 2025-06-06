// 5.- Imprime por consola el tipo de todas las variables.

// String (Tipo Cadena de Texto)
const vida = "Me va bien en la vida, estoy agradecido por ello";
const trabajo = "Encontre trabajo";
const habilidad = `Soy muy costante`;
console.log(typeof habilidad);
console.log(typeof trabajo);
console.log(typeof vida);

// Number (Tipo Número/Decimal)
const numero = 24;
const decimal = 1.72;
console.log(typeof numero);
console.log(typeof decimal);

// Booleano
const verdadero = true;
const falso = false;
console.log(typeof verdadero);
console.log(typeof falso);

// Null
// El valor null es un literal de Javascript que representa intencionalmente un valor nulo o "vacío".
let nulo = null;
console.log(typeof nulo);

// Undefined
// Una variable a la que no se le ha asignado valor es de tipo undefined. Un método o sentencia también devuelve undefined si la variable que se está evaluando no tiene asignado un valor 
let undefined;
console.log(undefined);

// Symbol
let symbol = Symbol("mySimbol");
console.log(symbol);

//BigInt (Número Grandes)
const numeroGrandes = BigInt(39889389338389339889339789393893899389383983383838993);
console.log(typeof numeroGrandes);
const numeroGrande = 39889389338389339889339789393893899389383983383838993n;
console.log(typeof numeroGrande);