function esemeny() {
    
    let mennyielso = document.querySelector("input[name='elso-input']");        //Mutató az első beviteli mezőra
    let mennyimasodik = document.querySelector("input[name='masodik-input']");  //Mutató a második beviteli mezőre
    let mutatszorzat = document.querySelector("span.kiir");     //Mutató a most 0-ra amit át fogunk írni

    let szorzat = 0; //nullázás
    szorzat = parseInt(mennyielso.value) * parseInt(mennyimasodik.value);
  //  alert("A szorzat: " + szorzat);       Ez egy felugró ablakba teszi ki az eredményt.
    mutatszorzat.innerHTML = szorzat ;
}
