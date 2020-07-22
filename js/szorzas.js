function esemeny() {

  let mennyielso = document.querySelector("input[name='elso-input']");        //Mutató az első beviteli mezőra
  let mennyimasodik = document.querySelector("input[name='masodik-input']");  //Mutató a második beviteli mezőre
  let mutatszorzat = document.querySelector("span.kiir");     //Mutató a most 0-ra amit át fogunk írni
  let mennyielsoertek = parseFloat(mennyielso.value);         //Menni az értéke,tartalma az első mezőnek
  let mennyimasodikertek = parseFloat(mennyimasodik.value);   //Menni az értéke,tartalma az második mezőnek
  let szorzat = 0; //nullázás
  let eredmeny = 0;

  if (isNaN(mennyielsoertek))   //Van-e valami az első mezőbe vagy üres?
  {
    mennyielsoertek = 0;          //Ha üres legyen 0 és mivel ez kissebb mint 1 így majd szól, hogy szám kell.
  }

  // mennyimasodikertek = isNaN(mennyimasodikertek) ? 0 : mennyimasodikertek;   // 3 operandusos if
  //Ha Nan a második érték akkor nulla lesz ha nem akkor marad önmaga

  if (isNaN(mennyimasodikertek)) {          //van-e szám a második mezőben
    alert("Nincs szám a második mezőben!");
   return;
  }


  let elsoegesz = parseInt(mennyielsoertek);    //Az első mezőbe egész szám van-e
  if (elsoegesz != mennyielsoertek) {
    alert("Egész számot kérek az első mezőbe!");
    return;
  }
  if (mennyielsoertek > 10) {                   //10-nél nagyobb-e szám
    alert("Maximum 10-ig lehet számot megadni!");
    return;                                     //Return utáni kódok nem futnak már le, vissza az elejére.
  }
  else if (mennyielsoertek < 1) {               // vagy 1-nél kissebb
    alert("1 vagy nagyobb számot kérek az első mezőbe!");
  }


  szorzat = mennyielsoertek * mennyimasodikertek;



  eredmeny = parseFloat(szorzat.toFixed(2));
  //alert (szorzat);
  //alert (eredmeny);
  //  alert("A szorzat: " + szorzat);       Ez egy felugró ablakba teszi ki az eredményt.
  mutatszorzat.innerHTML = eredmeny;
}
