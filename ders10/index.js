// objects

const obj={
    property1:"value1",
    2:10,
    "property n" : "value n"
}

const myCarHonda={
color:"red",
yil:2010,
motor:{hacim:3.3, silindir:4}
}

console.log(myCarHonda.color);
console.log(myCarHonda.motor.silindir);



// function Ogrenci(isim,soyisim,yas){
//     this.isim=isim;
//     this.soyisim=soyisim;
//     this.yas=yas

// }

// ogrenci1=Ogrenci("yaren","demirci",25)


class Ogrenci{
    constructor(isim,soyisim,yas){
        console.log("kurucu çalıştı")
        this.isim=isim;
        this.soyisim=soyisim;
        this.yas=yas
    }

    KayitYap(){
        console.log(`${this.isim} kayıt yaptı`)
    }

    isim;
    soyisim;
    yas;
}

ogr1=new Ogrenci("yaren","demirci",25)
ogr2=new Ogrenci("emin","çınar",30)
console.log(ogr1.isim)


ogr1.KayitYap()
ogr2.KayitYap()



class Car{
   constructor(){
    console.log("kurucu çalıştı car için")
   }
    marka;
    model;
    yil;
}

myCar=new Car();

 myCar.marka="opel";
 myCar.model="astra";
 myCar.yil=2000

console.log(myCar.marka)


