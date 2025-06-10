// 50.- Crea un array, transfórmalo a un set y almacénalo en un map.

let animales = ["león", "tigre", "oso", "cocodrilo", "perro"];
let mySet = new Set(animales);
console.log(mySet);

let map = new Map([
    ["león", "1"],
    ["tigre", "2"],
    ["oso", "3"],
    ["cocodrilo", "4"],
    ["perro", "5"]
]);
console.log(map);