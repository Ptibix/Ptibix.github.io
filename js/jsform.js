//  document.querySelector() ez a parancs egy mező címzéséhez amit kiolvasni akarok
document.querySelector("input[name='menny-input']");  //Azt az input mezőt keresem aminek a neve: menny-input, ezzel hivatkozok rá.
                                                        // Mivel a "" használva van ezért kell a ' -t használni a névadásnál.
                                                        // itt a menny-input csak egy címke, hivatkozás.
// A mező értékének elmentéséhez kell egy változó amibe beletesszük.
let mennyinput = document.querySelector("input[name='menny-input']");    // a mennyinput változót létrehozzuk és
                              //és beletesszük a mező értékét a mezőre hivatkozással. De a hivatkozást!
                            // Változó ami rámutat az elemre...egy Mutató, címzés! Csak mutat, nincs értéke!
                            //ezért kell kiolvasni az értékét a kövi lépésekben majd.

mennyinput.value;   // Ez adja meg a mező értékét (most nem, mert nincs esemény kezelés 
                                  //(de konzolba a böngészőbe lekérdezhető ha a mezőbe van valami))
                                  // ez string!
/*let x = mennyinput.value; 
console.log(x);  */

let price=1200;
let fizetes = 0; //nullázás
fizetes= parseInt(mennyinput.value) * price;  // Számmá alakítom a mező értéket (hisz string alapból) és szorzom az árral
console.log(fizetes);                          // NaN lesz, mert nincs esemény kezelés...

// Ez így elmélet az egész.

/* Kell a mező címe, azt betenni egy változóba. A változó csak mutató, így a value-val kell az értéke...
így lehet a mezőhöz hozzáférni vagy akár egy változóba elmenteni. Ez az elméleti lépések.  */