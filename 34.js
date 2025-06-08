// 34.- Verifica si una persona puede votar o no (mayor igual a 18) e indica cuántos años le faltan.

let edad = 65;
let voto;

switch(edad){
    case 0:
        voto = "Te faltan 18 años para votar";
        break;
    case 1:
        voto = "Te faltan 17 años para votar";
        break;
    case 2:
        voto = "Te faltan 16 años para votar";
        break;
    case 3:
        voto = "Te faltan 15 años para votar";
        break;
    case 4:
        voto = "Te faltan 14 años para votar";
        break;
    case 5:
        voto = "Te faltan 13 años para votar";
        break;
    case 6:
        voto = "Te faltan 12 años para votar";
        break;
    case 7:
        voto = "Te faltan 11 años para votar";
        break;
    case 8:
        voto = "Te faltan 10 años para votar";
        break;
    case 9:
        voto = "Te faltan 9 años para votar";
        break;
    case 10:
        voto = "Te faltan 8 años para votar";
        break;
    case 11:
        voto = "Te faltan 7 años para votar";
        break;
    case 12:
        voto = "Te faltan 6 años para votar";
        break;
    case 13:
        voto = "Te faltan 5 años para votar";
        break;
    case 14:
        voto = "Te faltan 4 años para votar";
        break;
    case 15:
        voto = "Te faltan 3 años para votar";
        break;
    case 16:
        voto = "Te faltan 2 años para votar";
        break;
    case 17:
        voto = "Te faltan 1 años para votar";
        break;
    default:
        voto = "Puedes votar perfectamente";
}

console.log(voto);