// 38.- Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma.

let idioma = "Portugués";
let mensaje;

switch(idioma){
    case "Español":
        mensaje = "Buenos Días, Chicos y Chicas!";
    break;
    case "Inglés":
        mensaje = "Good Morning, Boys and Girls!";
    break;
    case "Árabe":
        mensaje = "صباح الخير يا شباب ويا بنات!";
    break;
    case "Portugués":
        mensaje = "Bom dia, meninos e meninas!";
    break;
    default:
        mensaje = "Idioma desconocido";
}

console.log(mensaje);
