// 59.- Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci. Usa diferentes bucles tanto while, do while y for!. 

let valor1 = 0;
let valor2 = 1;
let resultado;
console.log(valor1); 
console.log(valor2); 

for (let buclfr = 0; buclfr<=10; buclfr++){

    resultado = valor1 + valor2; // 📍 Se calcula el siguiente número de Fibonacci: la suma de los dos anteriores.
    valor1 = valor2; // 📍 Se actualiza valor1 para que ahora tenga el valor de valor2. Se está desplazando un paso hacia adelante.
    valor2 = resultado; // 📍 valor2 se actualiza al nuevo resultado. Ahora está listo para la próxima suma.

    console.log(resultado);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

valor1 = 0;
valor2 = 1;
resultado;
console.log(valor1); 
console.log(valor2);

let bucWhle = 0;
while (bucWhle<=10){

    resultado = valor1 + valor2; // 📍 Se calcula el siguiente número de Fibonacci: la suma de los dos anteriores.
    valor1 = valor2; // 📍 Se actualiza valor1 para que ahora tenga el valor de valor2. Se está desplazando un paso hacia adelante.
    valor2 = resultado; // 📍 valor2 se actualiza al nuevo resultado. Ahora está listo para la próxima suma.
    bucWhle++;

    console.log(resultado);

}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

valor1 = 0;
valor2 = 1;
resultado;
console.log(valor1); 
console.log(valor2);

let bucDoWhle = 0;

do {

    resultado = valor1 + valor2; // 📍 Se calcula el siguiente número de Fibonacci: la suma de los dos anteriores.
    valor1 = valor2; // 📍 Se actualiza valor1 para que ahora tenga el valor de valor2. Se está desplazando un paso hacia adelante.
    valor2 = resultado;  // 📍 valor2 se actualiza al nuevo resultado. Ahora está listo para la próxima suma.
    bucDoWhle++;

    console.log(resultado);

}

while (bucDoWhle<=10);