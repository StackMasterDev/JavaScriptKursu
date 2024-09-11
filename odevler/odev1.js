for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  for (let i = 0; i <= 10; i++) {
    if (i % 2 != 0) {
      continue;
    }
    console.log(i);
  }



// ödev 2 

 var kategoriler = [
     "giyim",
    "ev eşyaları",
     "bahçe düzenleme",
    "sağlık",
     " güzellik"
];

// for .. of , for ..in, for , map

for (const kategori of kategoriler) {
    console.log(kategori);
}

for (const index in kategoriler) {
    console.log(kategoriler[index]);
}

for(i=0;i<kategoriler.length;i++){
        console.log(kategoriler[i])
}

kategoriler.map((kategori)=>console.log(kategori));




// var kategori = document.getElementById("kategori");



function testScope() {
    if (true) {
      let a = 10;
      
    }
    console.log(a);
  }

  testScope();

  