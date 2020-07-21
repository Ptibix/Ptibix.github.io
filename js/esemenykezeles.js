function esemeny() {
    let mennyinput = document.querySelector("input[name='menny-input']");
    let price = 1000;
    let fizetes = 0; //nullázás
    fizetes = parseInt(mennyinput.value) * price;
alert("Fizetendő"+fizetes+"Ft" );
}
