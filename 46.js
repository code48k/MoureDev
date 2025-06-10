// 46.- Crea un set que almacene cinco libros y añade dos más. Uno de ellos repetido,  y elimina uno concreto a tu elección.

let libros = new Set();
libros = new Set(["La Garganta Profunda", "Harry Potter", "Adiccion a la Vida", "La Casa Negra", "Pepito de los Palotes"]);
libros.add("La Maria");
libros.delete("La Vida es Bella");
console.log(libros);