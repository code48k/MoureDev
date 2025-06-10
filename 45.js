// 45.- Crea un set que almacene cinco libros y añade dos más. Uno de ellos repetido.

let libros = new Set();
libros = new Set(["La Garganta Profunda", "Harry Potter", "Adiccion a la Vida", "La Casa Negra", "Pepito de los Palotes"]);
libros.add("La Maria");
libros.add("La Vida es Bella");
libros.add("La Vida es Bella"); /* NO SE PUEDE AÑADIR ELEMENTOS CON EL MISMO NOMBRE. */
console.log(libros);