function proveriKorisnicko() {
  var ime = document.getElementById("korisnicko");
  var valueIme = ime.value;
  var uslov = /^@.{5,13}[-.0-9]?$/gm;
  var rezultat = uslov.test(valueIme);
  console.log(rezultat);
  var korisnickiP = document.getElementById("korisnickiP");
  korisnickiP.style.fontSize = "15px";
  korisnickiP.style.color = "red";
  if (rezultat != true) {
    korisnickiP.innerText =
      "Greska, korisnicko ime mora pocinjati znakom @ i imati izmedju 5 i 13 slova.";
    var dugme = (document.getElementById("registrujSe").disabled = true);
  } else korisnickiP.innerText = "";
}
