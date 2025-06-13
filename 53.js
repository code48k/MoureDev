// 53.- Crea un bucle que imprima todos los números pares entre 1 y 50. Usa diferentes bucles tanto while, do while y for!.

for (let buclfr = 1; buclfr<50; buclfr++){
    buclfr += 1;
    console.log(buclfr);
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucWhle = 1; 

while(bucWhle<50){
    bucWhle += 1;
    console.log(bucWhle);
    bucWhle++;   
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let bucDoWhle = 0;

do{
    bucDoWhle++;
    bucDoWhle += 1;
    console.log(bucDoWhle);
    
} while (bucDoWhle<50);