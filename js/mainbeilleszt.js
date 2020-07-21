console.log("szia Ez egy üzenet!"); /* ez a böngésző debug részén fog a konzol ablakba megjelenni) */

let ar1 = 5;  /* let a változó létrehozás */
let ar2 = 6;
let ossz= ar1+ar2;
console.log(ar1,ar2,ossz);
const age=44;       /* A konstansot mindig deklarálni és definiálni kell egyszerre, külön hibára fut */
console.log(age);
/*age=11;             /*Itt hibára fut, hibát ad, hisz konstans és nem írható felül */
console.log(age);
let x;
let y;
x= age/5; /*Normál osztás  8.8*/
y= age%5; /*Maradékos osztás, a maradékot adja vissza  4 */
console.log(x,y);
let h= 3**2; /* Hatványozás*/
console.log(h);
x= Number.isFinite(h);  /*végtelen-e vagyis az átadott érték véges szám-e...pl: 2 az true */
console.log(x);
/* Stringeket "" vagy '' közé kell írni */
let szoveg="Ez egy szöveg";
console.log(szoveg);
/* szoveg.length;  A string hossza csak változóba kellene tenni */
y=szoveg.length;
console.log(y);
console.log(szoveg+" bővítmény");  /* String összefűzés Lehet fordítva is: "bővitmény" + szoveg */
ar1= null ;         /* Nullázom a változót..létezik és null az értéke, a memóriába kevesebbet foglal,
                     meg látom, használaton kívüli */
console.log(ar1);

/*
UserAge = String(33)        Az userage változóba a sztring 33-at teszem bele.
UserAge = Number(UserAge)   Átalakítom a sztringet számmá */

let UserAge;
UserAge = String(33);
console.log(typeof UserAge);
UserAge = Number(UserAge);
console.log(typeof UserAge);

let testNumber = 22.44341;
console.log(testNumber.toFixed(2)); // "22.44"      Tizedesek száma  Sztring lesz az eredmény
console.log(testNumber.toPrecision(5)); // "22.443" Az egész szám hossza  Sztring lesz az eredmény
console.log(testNumber.toPrecision(10)); // "22.44340000"
console.log(typeof(testNumber.toFixed(2)));

//Parseint és flow. Általában stringből csinál számot, ha tud 

parseInt("1"); // 1
parseFloat("22") // 22
parseFloat("22.4") // 22.4
parseInt("1hal"); // 1
parseInt("hal1"); // NaN
parseFloat("22.4hal"); // 22.4
parseFloat("hal22.4") // NaN

