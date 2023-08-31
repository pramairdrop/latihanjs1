// kalkulator
// function hitung(a,b,c){
//     let d = 0;
//     a = parseFloat(a);
//     b = parseFloat(b);
//     if(c=='+'){
//         d= a+b;
//     }
//     else if(c=='-'){
//     d= a-b;
//     }
//     else if(c=='*'){
//     d= a*b;
//     }
//     else if(c=='/'){
//     d= a/b;
//     }
//     else {
//         d = 'operator salah';
//     }
//     return d;
// }

// let a = prompt('masukan nilai a');;
// let b = prompt('masukan nilai b');;
// let c = prompt('masukan operator');

// let hasil = hitung(a,b,c);

// console.log(hasil);

//menghitung karakter 
let inputan = prompt(`Masukkan kata : `);



function iterasi(a){
    let string = {};
    let jumlah = 0;
    for(i=0;i<a.length;i++){
        let karakter = a[i];
        if (!string[karakter]) {
          string[karakter] = true;
          jumlah++;
        }
    }
    return jumlah;
}

let hasil = iterasi(inputan);

console.log(hasil);
