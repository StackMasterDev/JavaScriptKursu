// operatorlar
// + , - , * , / , % , **
// atama operatorü

var a = 5;
a += 5; //a = a+5 -->10
a -= 5; //a = a-5 -->5
a *= 5; //a = a*5 -->25
a /= 5; //a = a/5 -->5
a %= 3; //a = a%5 --> 2
a **= 3; // a= a**3 -->8

// karşılaştırma operatorlari
// karşılaştırma operatörleri bool sonuç döner
// bool -> true , false

const isEqual = (3 == 3); //true
const isEqual2 = (3 == 32); //false
const isEqual3 = (3 != 1); // true
const isEqual4 = (3 != 3); // false

const isEqual5 = (3 == "3"); // true

const isEqual6 = (3 === "3") // false

const isEqual7 = (3 !== "3"); //true
const isEqual8 = (3 != "3"); // false

const a1 = (3 > 1);  //true
const a2 = (3 < 1);  //false

const a3 = (1 > 1);  //false
const a4 = (1 >= 1);  //true
const a5 = (1 <= 1);  //true

//aritmetik operatorler

const b1 = 12 % 5; // 2
// i++ --> i=i+1;
//i-- -->i= i-1;
//++i -->
//--i -->

let b2 = 0;
console.log(b2++);
console.log(b2);

let b3 = 0;
console.log(++b3);
console.log(b3);

let b4 = 1;
console.log(b4--);
console.log(b4);


let b5 = 1;
console.log(--b5);
console.log(b5);

let c1 = 5;
let c2 = 3;
let c3 = c1 + c2;
let c4 = c1 - c2;

let d1 = 4;
let d2 = 2;
let d3 = d1 ** 4; // d1 üzeri 4 yani 4 üzeri 4
let d4 = d1 ** d2; // d1 üzeri d2 yani 4 üzeri 2


//mantıksal operatörler
// bool döner

// ve && --> iki taraf da doğru olmalı
const e1 = true && true; // true
const e2 = true && false; // false
const e3 = false && false; // false
const e4 = true && 3 == 4; // false


// ||  ya da  biri bile true olsa true yoksa false döner

const f1 = true || false; //true

const f2 = !true; // false
const f3 = !false; // true


// null birleştirme
//  birinci ifade null ya da undefined değilse birinci ifadeyi al yoksa ikinci ifadeyi al
const n1 = null ?? 1; // 1
const n2 = undefined ?? 2; // 2
const n3 = false ?? 3; // false
const n4 = 0 ?? 4; // 0


null, undefined

undefined ?? "liste gelmedi hata var"
null ?? "liste boş geldi"


// dize operatörleri
console.log("yaren " + "demirci");

var isim = "yaren";
isim += " demirci"

age = 15;
let status = age >= 18 ? "yetişkin" : "çocuk";
console.log(status);


// tip öğrenme

const myFun = new Function("5 + 2");
const stringDeger = "Yaren";
const intDeger = 20;
const listDeger = [1, 2, 3, 4];
const today = new Date();
const boolDeger = true;

console.log(typeof (myFun)); //function
console.log(typeof (stringDeger)); //string
console.log(typeof (intDeger)); //number
console.log(typeof (today)); //object
console.log(typeof (xxxxxx)); //undefined


function toplam(num1, num2) {
    if (typeof (num1) == "number" && typeof (num2) == "number" ) {
        console.log(num1 + num2);
    }
    else {
        console.log(" hata var .sayi girin ")
     }

}

toplam(2, 3);
toplam("yaren", "lfkas")
