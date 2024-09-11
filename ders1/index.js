console.log('yaren')
console.log(20);

const deger=10
const Deger=20



// burası bir yorum satırı

/**
 * burası
 * multiple 
 * comment line
 */


var isim='yaren';  // değişken atar, scope dışında erişim var
let soyisim='demirci'; // değişken atar, scope dışında erişim yok
const yas=20; //  blok kapsamlı değiştirilemez

var tamAd= isim + ' '+ soyisim;
console.log(tamAd);

console.log(tamAd.length); // tamadın kaç karakter olduğunu yazar ->13

console.log('isim:' + isim);
console.log('yas: ' +yas);


// var y;
// y=30;
//  const x;
//  x=30;

// ctrl + k + c

{
    const y = 5;
    {
        console.log(y); 
        const x=30;
    }

   // console.log(x);
}


const PI=3.14;


var cumle="the answer is " + 10; // the answer is 10
console.log(cumle);

var z="37"+7;
console.log(z); // 377

console.log("37" * 2); // 74
console.log("37"-7); // 30

// parseInt & parseFloat
// int => 10 , float=> 10.7
//parseInt:  ifadeyi integere çevirir
//parseFloat:  ifadeyi virgüllü sayıya çevirir

console.log(parseInt("37")+7); //44

console.log(parseInt("37.8")+0.2); //37.2
console.log(parseFloat("37.8") +0.2); // 38

console.log(parseInt(parseInt("37.8")+0.2));

var a=10;
var b=20;
console.log(a+b); //30

//toString()
console.log(a.toString+b.toString);
// '10' +'20' => 1020

//integer
console.log(10+20); //30
console.log(20-10);//10
console.log(10*20);//200
console.log(20/10); //2




// listeler , arrays

const countries=["Turkey", "England","China"];
 
console.log(countries); //[ 'Turkey', 'England', 'China' ]

console.log(countries[0]); // Turkey


// boolean

var isMale=false;
var isFemale=true;


//objects

var Ogrenci1={
    ad:"Yaren",
    soyAd:"Demirci",
    yas:25,
    okul:"YTU"
}
var Ogrenci2={
    ad:"Ayşe",
    soyAd:"Demirci",
    yas:30,
    okul:"ITU"
}

console.log(Ogrenci1.ad);
console.log(Ogrenci1['ad']);

// Ogrenci1.ad="Mısra";
// console.log(Ogrenci1.ad);


Ogrenci1.ad= Ogrenci1.ad + " Mısra";
Ogrenci2.ad=Ogrenci2.ad + " Mısra";

console.log(Ogrenci1.ad);
console.log(Ogrenci2.ad);

Ogrenci1.yas=Ogrenci1.yas+5;
console.log(Ogrenci1.yas);


//string ile alakalı

console.log("benim adım " + Ogrenci1.ad + " yaşım " + Ogrenci1.yas + " okulum " +Ogrenci1.okul);
//benim adım Yaren Mısra yaşım 30 okulum YTU

console.log(`merhaba benim adım ${Ogrenci1.ad} soyadım ${Ogrenci1.soyAd} yaşım ${Ogrenci1.yas} okulum ${Ogrenci1.okul}`);

 
// \n => satır atlama 
console.log("benim adım emin \n yaşım 30 \n yaşadığım şehir bolu");

var stringIfade="one line \n another line \n third line";
console.log(stringIfade);





