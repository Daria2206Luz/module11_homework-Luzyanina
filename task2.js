function getPrime(a){
    if(a >1000){
          console.log("Данные не верны");
      } else if(a === 0 || a === 1) {
        console.log("0 и 1 не являются простыми числами")
      } else{
        for (let i = 2; i < 3; i++) {
          if(a % i === 0){
              console.log("состовное число")
          } else{
             console.log("простое число")
          }
        }
      }
    return a;
  }
        
 getPrime(587);