// Dobijanje trenutne putanje
var currentPath = window.location.pathname;

// Dobijanje svih navigacijskih linkova
var navLinks = document.getElementsByClassName("aktivna");
//dodavanje klase "active"
for (var i = 0; i < navLinks.length; i++) {
  var linkPath = navLinks[i].getAttribute("href");

  // Provjera da li je trenutna putanja jednaka putanji linka
  if (currentPath === linkPath) {
    navLinks[i].classList.add("active");
  }
}
