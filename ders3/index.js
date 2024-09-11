// for döngüsü

for (i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("-------------------------");

for (i = 10; i >= 0; i--) {
    console.log(i);
}

console.log("-------------------------");
// do while loop

var i = 0;

do {
    // burada kod 

    console.log(i);
    i++;

}
while (i < 5)
console.log("-------------------------");

var j = 0;
do {
    // burada kod 
    j++;
    console.log(j);


}
while (j < 5)
console.log("-------------------------");

// while

var a = 0;
while (a < 5) {
    console.log(a);
    a++;
}

var b=0;
while(b<5){
    b++;
    console.log(b);
}

var c=5;
while(c>0){
    console.log(c);
    c--;
    
}
// sonsuz döngü 
// while(true){
//     console.log("yaren");
// }


// continue break 

console.log("-----continue----");

var s=0;


while(s<5){
    s++;
    if(s==3){
        continue; //bunu atla  devam et 
    }
    console.log(s)
    
}

console.log("-----break----");
var d=0;

while(d<5){
    d++;
    
    if(d==3){
        break; // bu döngüyü durdur 
    };
    console.log(d);
   
}


// for .. of  --> dizinin elemanlarını döndürür

console.log("------ for .. of ------");

var meyveler=["Elma","Muz","Çilek"];

for(let meyve of meyveler){
    console.log(meyve);
}


// for .. in --> dizideki elemanların index numaralarını döndürür
console.log("------ for .. in ------");

for(let index in meyveler){
    //console.log(index);
    console.log(meyveler[index])
}

// map()
console.log("------ Map yapısı ------");

var kategoriler=["Ev Eşyaları","Elektronik","Giyim","Bahçe"];

kategoriler.map((kategori)=>console.log(kategori))

