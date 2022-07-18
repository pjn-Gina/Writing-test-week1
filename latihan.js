// Di javascript penulisan Comment ada 3 cara
/* ini juga cara tulis single line command */
/* 
Ini Multiple Line
Command
*/

// // Deklarasi
let nilai1 = 0 //variabel nilai1 diawali dengan nilai 0
let nilai2 = 0
let penjumlahanDuaNilai

// //Algoritma
penjumlahanDuaNilai = nilai1 + nilai2
console.log(penjumlahanDuaNilai) //console.log itu sama dengan Display= untuk menampilkan hasil

// //definisi deklarasi array
let array = [1,2,3,17]
// //gabungan dari tipe data

let nilaiSatu = 0
let nilaiDua = 0

// // selama terdapat output lain
if (nilaiSatu >= nilaiDua){
    console.log(nilaiSatu) //true
} 
else
    console.log(nilaiDua) //selama nilainya salah


// //NESTED IF
if (nilai % 2 === 0){
    console.log("Bilangan Genap")
} else if (nilai < 0){
    console.log("Bilangan Ganjil Negatif")
}else{
    console.log("Bilangan Ganjil Positif")
}
    
// //truthy and falsy
let data = username || 'Agus'

// //switch case

let menu = 2
switch (menu){
    case 1 : {
        console.log("Menu 1")
        break;
    }
    case 2 : {
        console.log("Menuu 2")
        break;
    }
    case 3 : {
        console.log("Menu 3")
        break;
    }
    default : {
        console.log("Anda salah memasukkan menu")
    }
}

// //Ternary Operator (membuat syntax jadi sedikit)
let isNowSale = true
isNowSale ? console.log("Shopping") : console.log("Not Shopping")

// /*PERULANGAN*/

// //For
let n = 100
for(let i=0 ; i< n+1;i++);

// //While Do

// // Do while

// // Nested Loop