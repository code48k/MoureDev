// 62.- Crea una funcion que reciba un array de números y devuelva el mayor de ellos. Explora diferentes sintaxis de funciones para resolver el ejercicio.

// Función simple

let myArraySimple = [9, 11, 45, 30, 76, 50, 61, 44, 88, 99];

function funcionSimple(){

  let mayor = [0];

  for (let i=1; i<myArraySimple.length; i++){

    if (myArraySimple[i]>mayor){

      mayor = myArraySimple[i];

    }

  }

    console.log(mayor);

}

funcionSimple();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Función parametros

function functionParameters(arrayParameters){

  let mayor = arrayParameters[0];

  for (let i=1; i<arrayParameters.length; i++) {

    if (arrayParameters[i]>mayor) {

      mayor = arrayParameters[i];

    }

  }
  
  console.log(mayor);

}

functionParameters([9, 11, 45, 30, 76, 50, 61, 44, 88, 89]);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funcion Anónima

let myArrayAnonymous = [9, 11, 45, 30, 75, 50, 61, 44, 68, 7];

const functionAnonymous = function(){

    let mayor = [0];

    for (let i=1; i<myArrayAnonymous.length; i++){

      if(myArrayAnonymous[i]>mayor){

          mayor = myArrayAnonymous[i]

      }

    }

    console.log(mayor);

}

functionAnonymous();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

let myArrayArrow = [9, 11, 45, 30, 70, 50, 61, 44, 38, 7];

const functionArrow = () => {

    let mayor = [0];

    for (let i=1; i<myArrayArrow.length; i++){

      if(myArrayArrow[i]>mayor){

          mayor = myArrayArrow[i];

      }

    }

    console.log(mayor);

}

functionArrow();

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

function functionReturnValues(myArrayReturnValues){

    let mayor = [0];

    for (let i=1; i<myArrayReturnValues.length; i++){

      if(myArrayReturnValues[i]>mayor){

          mayor = myArrayReturnValues[i]

      }

    }

    console.log(mayor);

}

functionReturnValues([9, 11, 45, 30, 76, 50, 61, 44, 88, 89]);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------