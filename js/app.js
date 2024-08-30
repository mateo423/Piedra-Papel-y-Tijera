let eleccionJugador = ""; // Variable para almacenar la elección del jugador

// Función para seleccionar la opción del jugador
const seleccionar = (opcion) => {
  eleccionJugador = opcion;

  // Remover la clase 'seleccionada' de todas las opciones
  document.querySelectorAll('.opcion').forEach(opcion => opcion.classList.remove('seleccionada'));

  // Añadir la clase 'seleccionada' a la opción elegida
  document.querySelector(`.opcion[onclick="seleccionar('${opcion}')"]`).classList.add('seleccionada');
}

// Función para jugar
const jugar = () => {
  if (!eleccionJugador) {
    alert("Selecciona una opción primero");
    return;
  }

  const opciones = ["piedra", "papel", "tijera"];
  const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

  let resultado, color;

  if (eleccionJugador === eleccionComputadora) {
    resultado = "Empate";
    color = "#FFA";
  } else if (
    (eleccionJugador === "piedra" && eleccionComputadora === "tijera") ||
    (eleccionJugador === "tijera" && eleccionComputadora === "papel") ||
    (eleccionJugador === "papel" && eleccionComputadora === "piedra")
  ) {
    resultado = "¡Ganaste!";
    color = "#0F0";
  } else {
    resultado = "¡Perdiste!";
    color = "#F00";
  }

  // Mostrar el resultado
  document.getElementById('resultado').innerHTML = `
    Elegiste: ${eleccionJugador}<br>
    La computadora eligió: <span class="eleccion-maquina" style="background-color: ${color};">${eleccionComputadora}</span><br>
    ${resultado}
  `;

  eleccionJugador = '';  // Restablecer la elección del jugador
  document.querySelectorAll('.opcion').forEach(el => el.classList.remove('seleccionada'));
}
