// 50.- Crea un array, transfórmalo a un set y almacénalo en un map.

const miArray = [1, 2, 2, 3, 4, 4, 5];

const miSet = new Set(miArray);

const miMap = new Map();
miMap.set('miConjunto', miSet);

console.log("Array original:", miArray);
console.log("Set creado:", miSet);
console.log("Map con el Set:", miMap);