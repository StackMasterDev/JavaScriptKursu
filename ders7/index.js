let string1="yaren";
let string2='yaren';
let string3=new String("Yaren");
console.log(string1)
console.log(string2)
console.log(string3)// [String: 'Yaren']
console.log(typeof(string3))// object


const firstString="2" + "3"; // 23

const secondString=new String("2 + 2"); //[String: '2 + 2']

const isim="Yaren Mısra Demirci";
console.log(isim.length); //19

// ["y","a","r","e","n"," ", ]

console.log(isim[0]); // Y

isim[0]="E"; // burada hiçbir şey olmaz çünkü stringler değiştirilemez

console.log(isim); 

console.log(isim.charAt(0)); //Y
console.log(isim.charAt(10)); //a
console.log(isim.charAt(100)); // " "

console.log(isim.charCodeAt(0));  //89 Y harfinin unicode değeri


console.log(isim.indexOf(0)); // -1
console.log(isim.indexOf("Y")); // 0
console.log(isim.indexOf("e")); // 3

console.log(isim.lastIndexOf('e')); //13


console.log(isim.startsWith("Y")); // true
console.log(isim.startsWith("e")); // false

console.log(isim.endsWith("Y"));// false
console.log(isim.endsWith("i"));// true

console.log(isim.includes("ç")); //false
console.log(isim.includes("Y")); //true

let name="yaren";
let surname="demirci"

let fullName= name+" " +surname;
console.log(fullName)

let fullName2=name.concat(" ",surname)
console.log(fullName2);

const sencence="hello,world,my,name,is,yaren";
let words= sencence.split(",");
console.log(words)

let numbers=[1,2,3,4,5];
let slicedNums=numbers.slice(1,4); // 2,3,4 
console.log(slicedNums)


let text="Hello, World!";
let result=text.substring(7,12);
console.log(result)



let text2="emin yarene ders anlatıyor, yaren ders dinliyor";
let result2=text2.replaceAll("yaren","irem")
console.log(text2);
console.log(result2);

let index= text2.search(/emin/);
console.log(index);

let text3="YAREN DEMİRCİ";
console.log(text3.toLocaleLowerCase()); 

let text4="yaren demirci";
console.log(text3.toUpperCase()); 

let text5= "yaren ";
let result5= text5.repeat(5);
console.log(result5)

let yarenisim=" yaren ";
console.log(yarenisim)
let yarenisimtrimornek=yarenisim.trim();
console.log(yarenisimtrimornek)

console.log(
    "yaren demirci 20 yaşında\n\
    ytu da okuyor"
);

let sayi1=5;
let sayi2=6;

console.log(`iki sayinın toplamı ${sayi1+sayi2}`)

