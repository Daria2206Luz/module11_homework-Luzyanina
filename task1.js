let arr = [1, 'a', 4, 2, 0];


getOddOrPar(arr);



for (var i=0; i < arr.length; i++) {
    if(arr[i] === 0) {
    console.log(0);}
};

function getOddOrPar(arr) {
  let sumOdd = 0;
  let sumPar = 0;

  for (let e = 0; e < arr.length; e++) {
    if(typeof arr[e] === "number") {
    if (arr[e] % 2 === 0 && arr[e] !== 0) {
        sumPar++;} 
}
  }

for (let z = 0; z < arr.length; z++) {
    if(typeof arr[z] === "number") {
    if (arr[z] % 2 !== 0 && arr[z] !== 0) {
      sumOdd++;}
  }
  }
  console.log("Odd : " + sumOdd);
  console.log("Par : " + sumPar);
}