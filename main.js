var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

const skills = {
  lenguajes: [["Python", 90],["Java", 75], ["HTML y CSS", 45], ["JavaScript", 35]],
  competencias: ["Paciencia", "Perseverancia", "Honestidad"]
}

const habilidades = document.getElementById("habilidades");

habilidades.innerHTML += `<h4>Lenguajes de programación:</h4>`;

for (let i = 0; i < skills["lenguajes"].length; i++) {
  habilidades.innerHTML += `
    <section class="lenguaje">
      <p>${skills["lenguajes"][i][0]} ... ${skills["lenguajes"][i][1]}%</p>
    </section>
  `;
}

const competenciasLista = document.querySelector('#competencias ul');

for (let i = 0; i < skills["competencias"].length; i++) {
  competenciasLista.innerHTML += `
    <li class="competencia">${skills["competencias"][i]}</li>
  `;
}

const formulario = document.getElementById("contacto");
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');

formulario.addEventListener('submit', function(event){
  event.preventDefault();

  const nombreValue = nombre.value;
  const correoValue = correo.value;
  const mesajeValue = mensaje.value;

  correoRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (correoRegex.test(correoValue) && correoValue != "") {
    var link = "mailto:j27790605@correo.unimet.edu.ve"
    + "?cc=" + correoValue
    + "&subject=" + encodeURIComponent("Respuesta portafolio")
    + "&body=" + encodeURIComponent(mesajeValue);
    window.open(link, "_blank").focus();
  } else {
    correo.value = "";
    alert("Correo Inválido");
  }
})