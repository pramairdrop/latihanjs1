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
// let inputan = prompt(`Masukkan kata : `);



// function iterasi(a){
//     let string = {};
//     let jumlah = 0;
//     for(i=0;i<a.length;i++){
//         let karakter = a[i];
//         if (!string[karakter]) {
//           string[karakter] = true;
//           jumlah++;
//         }
//     }
//     return jumlah;
// }

// let hasil = iterasi(inputan);

// console.log(hasil);



// function findMaxConsecutiveOnes(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let binary = arr[i].toString(2); // Convert the number to binary string
//         let count = 0;
//         let maxCount = 0;
        
//         for (let j = 0; j < binary.length; j++) {
//             if (binary[j] === '1') {
//                 count++;
//                 maxCount = Math.max(maxCount, count);
//             } else {
//                 count = 0;
//             }
//         }
        
//         console.log(maxCount);
//     }
// }

// // Test case
// const arr = [14, 9, 6, 20, 25];
// findMaxConsecutiveOnes(arr);

function isPalindrome(str){
    let baru = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    if(baru == baru.split('').reverse().join('')){
        console.log('yes');
    }
    else{
        console.log('no');
    }
}

let str1 = 'katak';
console.log(isPalindrome(str1));

let str2 = 'haha';
console.log(isPalindrome(str2));