// Funciones Simple

function myFunc(){
    console.log("¡Hola, función!");
    
}

for (let i=0; i<5; i++){
    myFunc();
}

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Con parametros

function myFuncWithParams(name){
    console.log(`¡Hola, ${name}`);
    
}

myFuncWithParams("Brais");
myFuncWithParams("MoureDev");

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Función Anonima

const myFunc2 = function(name){
    console.log(`¡Hola, ${name}`);

}

myFunc2("Bravo");

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Funciones Flecha

const myFunc3 = (name) =>{
    console.log(`¡Hola, ${name}`);

}

myFunc3("Bravito");

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Parametros

function sum(a, b){
    console.log(a + b);
    
}

sum(5, 10);
sum(5, 30);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Por defecto

function defaultSum (a = 0, b = 0){
    console.log(a + b);
    
}

defaultSum(5);
defaultSum(5, 10);
defaultSum(b = 5000);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Retorno de Valores

function multi (a, b){
    return a * b;
    
}
let result = multi(5,10);
console.log(result);

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Funciones anidadas

function extern(){
    console.log("Función externa");
    function intern(){
        console.log("Función interna");

    }
    intern();
}

extern();

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Funciones de order superior

function applyFunc(func, param){
    func(param);
}

applyFunc(myFunc3, "Funcion de orden superior");

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Foreach

myArray = [1, 2, 3, 4];

myArray.forEach((value) => console.log(value));
