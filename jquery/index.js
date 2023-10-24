window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  let scrollY = window.scrollY;

  if (scrollY > 130) {
    navbar.style.backgroundColor = "#a9ad5d";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});
const imagenClickeable = document.getElementById("ca");
const menu = document.getElementById("cmn");
let menuVisible = false; 

imagenClickeable.addEventListener("click", () => {
  if (!menuVisible) {
    menu.style.display = "block";
    menuVisible = true; 
  } else {
    menu.style.display = "none"; 
    menuVisible = false; 
  }
});


function scrollToSection1(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 1700, behavior: "smooth" });
  }
}
function scrollToSection2(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 0, behavior: "smooth" });
  }
}
function scrollToSection3(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 650, behavior: "smooth" });
  }
}
function scrollToSection4(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 2200, behavior: "smooth" });
  }
}
function scrollToSection5(sectionId) {
  let section = document.getElementById(sectionId);
  if (section) {
    window.scroll({ top: 1250, behavior: "smooth" });
  }
}

var form = document.getElementById("my-form");  
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
		alert("Hemos recibido tu comentario. ¡Gracias por tomarte el tiempo para escribirlo!");
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oh, ocurrió un error al procesar tu formulario"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oh, ocurrió un error al procesar tu formulario"
      });
    }
    form.addEventListener("submit", handleSubmit);