// indexed collections
// array

const arr1=[0]; // [ 0 ]
const arr2=[0,1]; // [ 0, 1 ]

const arr3=Array(42); // 42 elemanlı bir array oluştur
// [ <42 empty items> ]

const arr4=[]; // boş bir array tanımladık
arr4.length=42; //[ <42 empty items> ]


const arr5=Array.of(42,4); // içerisinde 42 olan bir dizi oluştur
//[ 42 ,4 ]

const myArr=["yaren","emin"]
console.log(myArr[1]) // emin 


const emptyArr=[];
emptyArr[0]="yaren";
emptyArr[1]="emin";
console.log(emptyArr)  //[ 'yaren', 'emin' ]

const arr7=[];
arr7[50]=["yaren"]
console.log(arr7.length) //51

const renkler=["mavi","yeşil","mor"];

for(let i=0; i<renkler.length ; i++){
    console.log(renkler[i])
}

const isimler=["yaren","mısra","ali","veli"];

isimler.forEach((isim)=>console.log(isim));

// isimler.forEach()
// (isim)=>console.log(isim)

isimler.forEach((isim)=>{
    if(isim=="yaren"){
        console.log(isim)
    }
    
})
console.log("*********************")
const numbers=[1,2,-3,0,10,-5];

numbers.forEach((number)=>{
    if(number>0){
        console.log("sayı pozitif " +number)
    }
    else if(number<0){
        console.log("sayı negatif " +number)
    }
    else{
        console.log("sayı sıfıra eşit " +number)
    }
})
console.log("*********************")


let classA=["yaren","mısra","ali"];
let classB=["ayşe","kübra","mehmet"];

// classB.forEach((ogrenci)=>{
//     classA.push(ogrenci)
// })

sonDurum=classA.concat(classB) 
// concat birleştirmek demek

console.log(sonDurum)

console.log("*********************")

// const arr8=["a","b","c"]; //["a","b","c"]
// const arr9=arr8.push("e") //["a","b","c","e"]
// const myString=arr9.join(" - "); //a - b - c - e
// console.log(myString)





// const arr10=["a","b","c"];

// let str="";

// arr10.forEach((e)=>{
//     str+= " - "
//     str+=e
// })

// console.log(str)


const arr11=[1,2,3,4,5];
arr11.pop(); // pop listedeki son elemanı alır bu değişkene atar ve listeden siler
console.log(arr11)


const first=arr11.shift(); // ilk elemanı kaldırır ve first değişkeneine atar

console.log(arr11)

arr11.unshift("30","40") // başına 30 ve 40 ı ekledi
console.log(arr11)


console.log("*********************")

let myArray=["a","b","c","d","e"];
myArray=myArray.slice(1,4); // 1 dahil 4 dahil değil --> b c d


let myArray2=["a","b","c","d","e"];
console.log(myArray2.at(-2)) // d --> sondan 2 
console.log(myArray2.at(1)) // b --> 1 


myArray2.reverse(); //[ 'e', 'd', 'c', 'b', 'a' ] diziyi tersine çevirir
console.log(myArray2)

myArray3=[1,2,[3,4]]; // 2 boyut
myArray3=myArray3.flat(); // düze indiriyor

console.log(myArray3) //[ 1, 2, 3, 4 ]

const ogrenciler=["yaren","ali","emin","misra"]
ogrenciler.sort() // adan z ye sıralar 
console.log(ogrenciler)

const nums=[1,3,2,4,5];
nums.sort()
console.log(nums)


const ogrenciler2=["yaren","ali","emin","misra"]

console.log(ogrenciler2.indexOf("yaren")) // yaren kaçıncı indexte  yani 0
console.log(ogrenciler2.indexOf("emin")) // emin kaçıncı indexte  yani 2

console.log(ogrenciler2.indexOf("kübra")) // eğer yoksa -1 verir

console.log(ogrenciler2.lastIndexOf("emin"))  //2

console.log(ogrenciler2.lastIndexOf("yaren"))  //4

const harfler=["a","b","c"];

harfler2=harfler.map((harf)=>harf.toUpperCase());

console.log(harfler2)


const a1=["a",10,"b",20,"c",30]
const a2= a1.filter((item)=>typeof item ==="number");

// let a2=[];

// a1.forEach((e)=>{
//     if(typeof(e)==="number"){
//         a2.push(e)
//     }
// })

console.log(a2)


const i=a1.find((item)=> typeof item==="number");
console.log(i); //10

const i2=a1.findLast((item)=>typeof item ==="number")

console.log(i2) //30

const i3=a1.findIndex((item)=>typeof item==="number")
console.log(i3)

const i4=a1.findLastIndex((item)=>typeof item==="number")
console.log(i4) //5



const dbOgrenciler=[
    {name:"emin",age:30,cinsiyet:"erkek"},
    {name:"yaren",age:20,cinsiyet:"kadın"},
    {name:"ali",age:50,cinsiyet:"erkek"}
]

dbOgrenciler.forEach((ogrenci)=>console.log(ogrenci.name))
