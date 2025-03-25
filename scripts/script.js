function toggleDropdown(id, btn) {
  // Cerrar todos los menús antes de abrir el seleccionado
  var allDropdowns = document.querySelectorAll(".dropdown-content");
  var allButtons = document.querySelectorAll(".sidebar button");

  allDropdowns.forEach((dropdown) => {
    if (dropdown.id !== id) {
      dropdown.style.display = "none";
    }
  });

  allButtons.forEach((button) => {
    var arrow = button.querySelector(".arrow");
    if (arrow && button !== btn) {
      arrow.classList.remove("rotated");
    }
  });

  // Abrir o cerrar el menú actual
  var content = document.getElementById(id);
  var arrow = btn.querySelector(".arrow");

  if (content.style.display === "block") {
    content.style.display = "none";
    arrow.classList.remove("rotated");
  } else {
    content.style.display = "block";
    arrow.classList.add("rotated");
  }
}

// Tema 1: Modelo Discreto
function loadCivilStatusDiagram() {
  var diagram = `digraph civil_status {
        rankdir=LR;
        size="6,4";

        // Estado de aceptación
        node [shape = point ]; qi;
        node [shape = doublecircle]; Muerto;

        // Estados normales
        node [shape = circle];
        Soltero;
        Casado;
        Divorciado;
        Viudo;

        // Transiciones
        qi -> Soltero;
        Soltero -> Casado [label="Cs"];
        Casado -> Divorciado [label="Dv"];
        Casado -> Viudo [label="Ev"];
        Soltero -> Muerto [label="Mr"];
        Casado -> Muerto [label="Mr"];
        Divorciado -> Muerto [label="Mr"];
        Viudo -> Muerto [label="Mr"];
        Divorciado -> Casado [label="Cs"];
        Viudo -> Casado [label="Cs"];
    }`;

  var viz = new Viz();
  viz
    .renderSVGElement(diagram)
    .then(function (element) {
      var container = document.getElementById("diagramModelDis");
      container.innerHTML = "";
      container.appendChild(element);
    })
    .catch((error) => {
      console.error("Error al generar el diagrama:", error);
    });
}

// Tema 2: AF y AFD
function loadDiagramAF() {
  var diagram = `digraph finite_state_machine {
        rankdir=LR;
        size="6,4";
        
        node [shape = point ]; qi;
        node [shape = doublecircle]; q1;  // Estado de aceptación
        node [shape = circle]; q0;

        // Transiciones
        qi -> q0;
        q0 -> q0 [label = "0"];
        q0 -> q1 [label = "1"];
        q1 -> q0 [label = "0"];
        q1 -> q1 [label = "1"];

        q0 [label="q0 (Inicio)"];
        q1 [label="q1 (Aceptación)"];
    }`;

  var viz = new Viz();
  viz
    .renderSVGElement(diagram)
    .then(function (element) {
      var container = document.getElementById("diagramAF");
      container.innerHTML = "";
      container.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

function loadAFD() {
  var diagram = `digraph finite_state_machine {
        rankdir=LR;
        size="6,4";
        
        node [shape = point ]; qi;
        node [shape = doublecircle]; q0;  
        node [shape = circle]; q1;

        qi -> q1;
        q0 -> q1 [label = "0"];
        q0 -> q0 [label = "1"];
        q1 -> q0 [label = "0"];
        q1 -> q1 [label = "1"];

        q0 [label="q0"];
        q1 [label="q1"];
    }`;

  var viz = new Viz();
  viz
    .renderSVGElement(diagram)
    .then(function (element) {
      var container = document.getElementById("diagramAFD");
      container.innerHTML = "";
      container.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Tema 4: Tabla de Transiciones
function loadParOnesDiagram() {
  var diagram = `digraph ParOnes {
        rankdir=LR;
        size="6,4";
        
        node [shape = point ]; qi;
        node [shape = doublecircle]; q0;
        node [shape = circle];
        
        qi -> q1;
        q0 -> q1 [label = "1"];
        q0 -> q0 [label = "0"];
        
        q1 -> q0 [label = "1"];
        q1 -> q1 [label = "0"];
    }`;

  var viz = new Viz();
  viz
    .renderSVGElement(diagram)
    .then(function (element) {
      var container = document.getElementById("diagramParOnes");
      container.innerHTML = "";
      container.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Tema 5 y 6: Función de Transición y Transición Extendida
function loadImparAsDiagram() {
  var diagram = `digraph ImparAs {
        rankdir=LR;
        size="6,4";
        
        node [shape = point ]; qi;
        node [shape = doublecircle]; q1;
        node [shape = circle];

        q0 [label="q0 (par)"];
        q1 [label="q1 (impar)"];

        qi -> q0;
        q0 -> q1 [label = "a"];
        q0 -> q0 [label = "b"];

        q1 -> q0 [label = "a"];
        q1 -> q1 [label = "b"];
    }`;

  var viz = new Viz();
  viz
    .renderSVGElement(diagram)
    .then(function (element) {
      var container = document.getElementById("diagramImparAs");
      container.innerHTML = "";
      container.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Tema 7: Automata No Determinista

function LoadDiagramAFND() {
  var diagram = `digraph AFND {
        rankdir=LR;
        size="6,4"
        
        node [shape = point ]; qi;
        node [shape = doublecircle]; q5;
        node [shape = circle];

        qi -> q0;
        q0 -> q1 [label="a"];
        q0 -> q2 [label="b"];
        q1 -> q3 [label="b"];
        q2 -> q3 [label="a"];
        q3 -> q4 [label="a"];
        q4 -> q4 [label="b"];
        q4 -> q5 [label="a"];
    }`;

  var viz = new Viz();
  viz
    .renderSVGElement(diagram)
    .then(function (element) {
      var container = document.getElementById("diagramAFND");
      container.innerHTML = "";
      container.appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Tema 8: AFND con transiciones vacias

function loadDiagramEmptyTrans() {
  var graph = `
        digraph AFND_EmptyTransitions {
            rankdir=LR;
            size="6,4";
            node [shape = point ]; qi;
            node [shape = doublecircle]; q1 q4;
            node [shape = circle];
            
            qi -> q0;
            q0 -> q1 [label="ε,1"];            
            q0 -> q3 [label="ε,0"];
            q1 -> q2 [label="0"];
            q2 -> q1 [label="0"];
            q3 -> q3 [label="0"];
            q3 -> q4 [label="1"];
            q4 -> q4 [label="0"];
            q4 -> q5 [label="1"];
        }
    `;

  var viz = new Viz();
  viz
    .renderSVGElement(graph)
    .then(function (element) {
      document.getElementById("diagramEmptyTrans").innerHTML = "";
      document.getElementById("diagramEmptyTrans").appendChild(element);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Tema 10: Diagramas AFND web a ebay

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".AFNDWebEbay").forEach((div) => {
    var graph = `digraph { rankdir=LR; size="6,4";
            node [shape = point ]; qi;
            node [shape = circle];
            node [shape = doublecircle]; 4 8;
            node [shape = circle];

            qi -> 1;
            1 -> 1 [label="Σ - {w, e}"];
            1 -> 2 [label="w"];
            2 -> 3 [label="e"];
            3 -> 4 [label="b"];
            1 -> 5 [label="e"];
            5 -> 6 [label="b"];
            6 -> 7 [label="a"];
            7 -> 8 [label="y"]; }`;
    var viz = new Viz();
    viz
      .renderSVGElement(graph)
      .then((element) => {
        div.innerHTML = "";
        div.appendChild(element);
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

// Función para generar el AFD equivalente
// function loadAFDWebEbay() {
//   var graph = `
//         digraph AFD {
//             rankdir=LR;
//             node [shape = doublecircle]; 18;
//             node [shape = circle];

//             1 -> 12 [label="w"];
//             1 -> 15 [label="e"];
//             12 -> 135 [label="e"];
//             135 -> 146 [label="b"];
//             146 -> 18 [label="y"];
//             15 -> 16 [label="b"];
//             16 -> 17 [label="a"];
//             17 -> 18 [label="y"];
//             1 -> 1 [label="Σ - {e, w}"];
//             12 -> 12 [label="Σ - {e}"];
//             135 -> 135 [label="Σ - {b}"];
//             146 -> 146 [label="Σ - {y}"];
//             15 -> 15 [label="Σ - {b}"];
//             16 -> 16 [label="Σ - {a}"];
//             17 -> 17 [label="Σ - {y}"];
//         }
//     `;

//   var viz = new Viz();
//   viz
//     .renderSVGElement(graph)
//     .then(function (element) {
//       document.getElementById("AFDWebEbay").innerHTML = "";
//       document.getElementById("AFDWebEbay").appendChild(element);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

function loadAFDWebEbay() {
    var graph = `
      digraph AFD {
        rankdir=LR;
        node [shape = point ]; qi;
        node [shape = circle];
        
        // Estados del AFD
        "q0" [label="q0"];
        "q1" [label="q1"];
        "q2" [label="q2"];
        "q3" [label="q3", shape=doublecircle];
        "q4" [label="q4"];
        "q5" [label="q5"];
        "q6" [label="q6"];
        "q7" [label="q7", shape=doublecircle];

        // Transiciones
        qi -> "q0";
        "q0" -> "q1" [label="w"];
        "q0" -> "q4" [label="e"];
        "q1" -> "q2" [label="e"];
        "q2" -> "q3" [label="b"];
        "q4" -> "q5" [label="b"];
        "q5" -> "q6" [label="a"];
        "q6" -> "q7" [label="y"];
      }
      `;
  
    var viz = new Viz();
    viz
      .renderSVGElement(graph)
      .then(function (element) {
        document.getElementById("AFDWebEbay").innerHTML = "";
        document.getElementById("AFDWebEbay").appendChild(element);
      })
      .catch((error) => {
        console.error(error);
      });
  }

// Cargar los diagramas al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  loadCivilStatusDiagram();
  loadDiagramAF();
  loadAFD();
  loadParOnesDiagram();
  loadImparAsDiagram();
  LoadDiagramAFND();
  loadDiagramEmptyTrans();
  loadAFDWebEbay();
});
