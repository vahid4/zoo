function proveriKorisnicko() {
  var ime = document.getElementById("korisnicko");
  var valueIme = ime.value;
  var uslov = /^@.{5,13}[-.0-9]?$/gm;
  var rezultat = uslov.test(valueIme);
  var korisnickiP = document.getElementById("korisnickiP");
  if (rezultat != true) {
    korisnickiP.innerText =
      "Greška, korisničko ime mora počinjati znakom @ i imati između 5 i 13 slova.";
    document.getElementById("registrujSe").disabled = true;
  } else korisnickiP.innerText = "";
}

function proveriIme() {
  var ime = document.getElementById("ime");
  var valueIme = ime.value;
  var uslov = /^[A-Z]\w{2,}$/gm;
  var rezultat = uslov.test(valueIme);
  // console.log(rezultat);
  var imeP = document.getElementById("imeP");

  if (rezultat != true) {
    imeP.innerText =
      "Greška,ime mora počinjati velikim početnim slovom i imati bar 3 karaktera.";
    document.getElementById("registrujSe").disabled = true;
  } else imeP.innerText = "";
}

function proveriPrezime() {
  var prezime = document.getElementById("prezime");
  var valuePrezime = prezime.value;
  var uslov = /^[A-Z]\w{2,}\ić$/gm;
  var rezultat = uslov.test(valuePrezime);
  console.log(rezultat);
  var prezimeP = document.getElementById("prezimeP");

  if (!rezultat) {
    prezimeP.innerText =
      "Greška,prezime mora počinjati velikim početnim slovom, imati najmanje 5 karaktera i završavati se na 'ić'";
    document.getElementById("registrujSe").disabled = true;
  } else prezimeP.innerText = "";
}

function proveriEmailAdresu() {
  var email = document.getElementById("email");
  var valueEmail = email.value;
  var uslov = /^\w+[.-]+\w{0,}\@\w+\.\w+$/gm;
  var rezultat = uslov.test(valueEmail);
  console.log(rezultat);
  var emailP = document.getElementById("emailP");

  if (!rezultat) {
    emailP.innerText =
      "Greška,email mora sadržati slova i znak, pa @, slova, '.', slova";
    document.getElementById("registrujSe").disabled = true;
  } else emailP.innerText = "";
}

function proveriPassword() {
  var pass = document.getElementById("password");
  var valuePass = pass.value;
  var uslov = /^[A-Z]+[\w.-]{6,}[A-Z]+$/gm;
  var rezultat = uslov.test(valuePass);
  console.log(rezultat);
  var passP = document.getElementById("passP");

  if (!rezultat) {
    passP.innerText =
      "Greška, lozinka mora sadržati veliko slovo na početku i na kraju, mora biti duža od 8 karaktera, i sadržati bar 1 znak";
    document.getElementById("registrujSe").disabled = true;
  } else passP.innerText = "";
}

function submit() {
  window.location.href = "./uspesnaRegistracija.html";
}

// ----------------------------------

// Sacekajte da se ucita DOM
document.addEventListener("DOMContentLoaded", function () {
  // Dobijanje trenutne putanje
  var currentPath = window.location.pathname;

  // Dobijanje svih navigacijskih linkova
  var navLinks = document.getElementsByClassName("nav-link");

  // Dodavanje klase "active"
  for (var i = 0; i < navLinks.length; i++) {
    var linkPath = navLinks[i].getAttribute("href");

    // Provjera da li je trenutna putanja jednaka putanji linka
    if (currentPath.includes(linkPath)) {
      navLinks[i].classList.add("active");
    }
  }
});
