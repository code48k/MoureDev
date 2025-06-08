// 32.- Imprime por consola un mensaje si el usuario y contraseña concide con uno de los establecidos.

const usuario = "jmlucasdelamo@gmail.com";
const contrasena = "123456";

if(usuario === "jmlucasdelamo@gmail.com" && contrasena === "123456"){
    console.log("Bienvenido Juan Manuel");
}

else if (usuario === "jmlucasdelamo@gmail.com" && contrasena != "123456"){
    console.log("La constraseña no es correcta");
}

else if (usuario !== "jmlucasdelamo@gmail.com" && contrasena == 123456){
    console.log("El usuario no es correcto");
}

else{
    console.log("El usuario y contraseña no son correcto, intentalo de nuevo");
}