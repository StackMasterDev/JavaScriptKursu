// fonksiyonlar -- metodlar

function hello(){
    console.log("Hello world")
}

function alanHesapla(kenar){
    console.log(kenar*kenar);
}

function veriGetir(){
    return "veriler";
}


hello();
alanHesapla(10);
console.log(veriGetir());

var veriler=veriGetir();
console.log(veriler);


function kullanicilariGetir(){
    let kullanicilar=["Yaren","Emin","Ahmet","Ayşe"];
    return kullanicilar;
   
}

var x=kullanicilariGetir();

for(const kullanici of x){
    console.log(kullanici);
}



function ListeYazdir(liste){
    for (const elaman of liste) {
        console.log(elaman);
    }
}

var a=[1,2,3,4,2,1,1,1];
var b=["Yaren","Emin","Ayşe"];

ListeYazdir(a);
ListeYazdir(b);


const urunler= function urunGetir(){
    return "ürünler";
}

const urunler2 = ()=> "Ürünler";

const urunler3=()=>{
    return "Ürünler";
}

const isimGetir=(isim)=>  isim;

console.log(isimGetir("yaren"))


function scope(){
  //  let isim=yaren; scope dışında yazdırmaz 
  //var isim ="yaren" // buradaki değişken sadece fonksiyon içinde kulalnılır
}

//console.log(isim);

function getScore(){
    const num1=2;
    const num2=3;

    function add(){
        return (num1+num2);
    }
    return add();
}

console.log(getScore());


function toplam(num1,num2){
    console.log(num1+num2);
}

toplam(3,5);
toplam(2,3);
toplam(200,100);

function ucluToplam(num1,num2,num3){
    console.log(num1+num2+num3);
}

ucluToplam(3,4,5);

// isim, yaş , okul 

function KisiGoster(isim,yas,okul){
    console.log(`benim adım ${isim} , yaşım ${yas} , okulum ${okul}`);
}

KisiGoster("Yaren",25,"YTU");
KisiGoster("emin",30,"YOk")

const meyveler=["elma","armut","muz"];

meyveler.map((meyve)=>console.log(meyve))

meyveler.map(function (meyve){
    console.log(meyve);
})

