// for (let i = 0; i <= 10; i++) {
//     if (i % 2 === 0) {
//       console.log(i);
//     }
//   }

//   for (let i = 0; i <= 10; i++) {
//     if (i % 2 != 0) {
//       continue;
//     }
//     console.log(i);
//   }



// // ödev 2 

//  var kategoriler = [
//      "giyim",
//     "ev eşyaları",
//      "bahçe düzenleme",
//     "sağlık",
//      " güzellik"
// ];

// // for .. of , for ..in, for , map

// for (const kategori of kategoriler) {
//     console.log(kategori);
// }

// for (const index in kategoriler) {
//     console.log(kategoriler[index]);
// }

// for(i=0;i<kategoriler.length;i++){
//         console.log(kategoriler[i])
// }

// kategoriler.map((kategori)=>console.log(kategori));




// // var kategori = document.getElementById("kategori");



// function testScope() {
//     if (true) {
//       let a = 10;

//     }
//     console.log(a);
//   }

//   testScope();








// toplam = 0;

// for (let number of numbers) {
//   toplam += number;

// }

// console.log(toplam);
numbers = [5, 10,"yaren", 15, 20];

function listeToplama(liste) {
  toplam = 0;
  for (const eleman of liste) {
    if (typeof (eleman) == "number") {
      toplam += eleman;
    }
    else {
      return "Listede sayi olmayan değer var";
    }

  }
  return toplam;
  

}

console.log(listeToplama(numbers));


