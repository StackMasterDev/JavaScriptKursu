const n=1000;

// number object

const biggestNumber=Number.MAX_VALUE; //1.7976931348623157e+308
const smallestNumber=Number.MIN_VALUE; //5e-324
const notNum=Number.NaN; //NaN

console.log(biggestNumber); 
console.log(smallestNumber); 
console.log(notNum); 


// methods
var deger="3.14";
var number1=Number.parseFloat(deger);
var number2=Number.parseInt(deger);
console.log(typeof(deger));//string
console.log(typeof(number1));//number
console.log(typeof(number2));// number
console.log(number1); // 3.14
console.log(number2); // 3

console.log(Number.isInteger(3)); //true
console.log(Number.isInteger(3.14));//false
console.log(Number.isInteger("3"));//false


3=="3" // true
3==="3" // false

function tamSayiMi(value){
    if(typeof(value)=="number"){
        return true;
    }
    else{
        return false;
    }
}

console.log(tamSayiMi("3"));// false

console.log(Number.isNaN(3));//false
console.log(Number.isNaN(Number.NaN));//true


//Math Object

console.log(Math.PI);
console.log(Math.sin(45));

numbers=[-1,2,30,4,50,6,7,12,13,0];

let enBuyuk=Number.MIN_VALUE;
for (const number of numbers) {
    if(number>enBuyuk){
        enBuyuk=number;
    }
    
}
console.log(enBuyuk)

console.log(Math.max(-1,2,30,4,50,6,7,12,13,0));
console.log(Math.max(1,2,"yaren",50)); // sayısal değer olmadığı için nan döner
console.log(Math.max(1,2,"3",50)); // "3" ü içinde sayı olduğu için dönüştürdü

console.log(Math.random());// 0-1 arasında random değer üret 0.94,0.15,0.30
console.log(Math.random()*10) // 0-10 arasında değer üretir
console.log(Math.random()*100) // 100e kadar üretir


console.log(Math.floor(Math.random()*10)) // 0-10 arasında tam sayı üretir

console.log(Math.sqrt(9)); // 3

// big int  integerin max değerinden daha büyük sayı tutar



// Dates

const xmas95 = new Date("1995-12-25");
console.log(xmas95);

const today=new Date();

console.log(today);

const yarenDg=new Date("1999-07-14");

console.log((today-yarenDg));




