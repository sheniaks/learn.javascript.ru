// for (let i=1;i<10;i++) { 
//     if(!(i%2)) console.log(i);
// }

// let i = 0;
// while (i < 3) {
//   console.log( `number ${i}!` );
//   i++;
// }

// let val = 0;
// while ( val <= 100 ) {
//     val = prompt('Put number 100 or more');
//     if (val == null) break;
// }

// let val;
// do {
//     val = prompt('Put number 100 or more', 0);
// } while (val <= 100 && val);

let n = prompt('Put maximum value here, please')
outer:
for (let i=1; i<n; i++) {11
    for (let j=2;j<i;j++){
        if (i%j == 0) continue outer;
        console.log(j);
    }
    console.log(i);
}