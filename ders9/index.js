// Maps and Sets

const ogrenciler=new Map();
ogrenciler.set("emin",30)
ogrenciler.set("yaren",25)

for(const [key,value] of ogrenciler){
    console.log(`${key} yaşı ${value}`)
}


// Sets unique list

mySet=new Set(); 
mySet.add(1)
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(2)

console.log(mySet) //Set(3) { 1, 2, 3 }