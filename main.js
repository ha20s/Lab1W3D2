

// part 1 
// for (let i = 1 ; i <= 25 ; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// part 2 

// for (let i = 1; i <= 10; i++) { 
//     console.log(i * i);  // العدد بنفسه 
// } 

// part 3 

// for (let i = 0 ; i <= 20 ; i++){
//     if ( i % 2 ){ // باقي القسمه 
//         console.log(i)
//     }
// }

// part 4 

let fn1 = 0, fn2 = 1, nextFibonacci;


for (let i = 0; i <= 10; i++) {

   nextFibonacci = fn1 + fn2;
   fn1 = fn2;
   fn2 = nextFibonacci;
   console.log(nextFibonacci);
}

// part 5 


