console.log("ders 2");

{
    // statement 1
    // statement 2
    // statement 3
}

/**
 * 
 * while
 * for 
 * if
 * switch case
 */


var i = 0;

while (i < 5) {

    console.log(i);
    i += 1;

}

for (var i = 1; i <= 10; i++) {
    console.log(i);
}

var countries = ["Turkey", "England", "China"];
//countries[0]
//countries[3]

for (i = 0; i < countries.length; i++) {
    console.log(countries[i])
}


var yas = 17;

if (yas < 18) {
    console.log("reşit değil")
}
else if (yas > 18) {
    console.log("reşit ")
}
else {
    console.log("18e eşit")
}


var gun = 0;

switch (gun) {
    case 0:
        console.log("pazartesi");
        break;
    case 1:
        console.log("salı");
        break;
    case 2:
        console.log("çarşamba");
        break;
    default:
        console.log("bhiçbiri değil");
        break;

}


// try {
//     // bu kodu çalıştır eğer doğruysa işi yap
//   } 
//   catch (err) {
//     // eğer hata varsa bu hatayı burada ele alırız bu hata err parametreye eşittir
//   }

sayi=10;

try{
    sayi=Xsayisi+3;
    console.log(sayi)

}catch(err){
    console.log("hata" + err.message)
}
