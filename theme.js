const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme =
  localStorage.getItem("theme") ||
  ((tmp = Object.keys(themeMap)[0]), localStorage.setItem("theme", tmp), tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem("theme");
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem("theme", next);
}

document.getElementById("themeButton").onclick = toggleTheme;
// ------------------------------------------------------------------------------------------------------------------------

var seleccionar = document.querySelector("select");
var div = document.querySelector("div");

seleccionar.addEventListener("change", establecerClima);

function establecerClima() {
  var eleccion = seleccionar.value;

  if (eleccion === "uno") {
    div.textContent =" ||Un catorce de febrero quien diria que ese dia seria nuestra fecha en si no me importa si es ese dia o es otro pero lo que si se es que"+
    "las llamadas por las noches las develadas que nos damos el simple echo de saber que tu  estas bien para mi es lo mejor que me paso por que no puedo vivir"+
    "sin ti por que eres tu la que convierte la oscuridad en luz te amo Nicole ||";
  } else if (eleccion === "dos") {
    div.textContent =
      "|| Antes que vuelvas a aparecer en mi vida. Estába lloviendo a torrrenciales  si  bien es cierto estaba tranquilo pero por dentro tenia un huracan "+
      "que destruye todo a su paso ,destruyendo asi lo poco de pequeños recuerdos los destruia hasta que un mensaje me llego y sin titubear te conteste y no sabia en ese momento o ese instante cambiaria todo ||";
  } else if (eleccion === "tres") {
    div.textContent =
      "|| Sabes quisiera pedirte 3 cosas , la primera es que me digas todo lo que te incomoda asi  yo lo sabre y podre mejorar y nuestra relacion"+
      "mejorara mas de lo que ya esta, la segunda es que si tienes algo que decir lo digas sin importar que dilo , la  tercera y muy importante es"+
      "que me des el anillo :P jaajaja na mentira la tercera es que nos amemos como si no hubiera mañana como si la cuarentena regresara ||";
  } else if (eleccion === "cuatro") {
    div.textContent =
      "|| ahora un poema mi princesa amada el pensar que tu ahora eres mi enamorada es una alegria desmesurada, te llegue amar de una manera inesperada asi como tu yo"+
      "terminamos siendo pareja ,te amo y este amor es tan especial que no hace falta verte ni tocarte con solo saber que tu existes, me basta con cerrar los ojos e imaginarte a ti "+
      "saber que existes, con cada dia que pasa me doy cuenta que el  amor que te tengoes mas que ayer pero es menor al de mañana !! ||";
  } else {
    div.textContent = "";
  }
}

