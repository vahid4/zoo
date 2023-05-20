// Dohvati naziv trenutne stranice
var currentLocation = window.location.href;

// Dohvati sve linkove
var navLinks = document.querySelectorAll("header ul li a");

// Iteriraj kroz linkove navigacije
for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];

  // Proveri da li je link isti kao trenutna stranica
  if (link.href === currentLocation) {
    link.classList.add("active");
  }
}
