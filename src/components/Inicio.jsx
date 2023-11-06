import React, { useState } from "react";
import Juego from "./Juego";
import Felicitaciones from "./Felicitaciones";

function Inicio() {
  const [nombreJugador, setNombreJugador] = useState("");
  const [mostrarJuego, setMostrarJuego] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [mostrarFelicitaciones, setMostrarFelicitaciones] = useState(false);
  const [rondaActual, setRondaActual] = useState(1);

  const [nombreJugador2, setNombreJugador2] = useState("");
  const [puntaje2, setPuntaje2] = useState(0);
  const [turno, setTurno] = useState(1);

  const manejarClickJugar = (nombre, nombre2) => {
    setNombreJugador(nombre);
    setNombreJugador2(nombre2);
    setMostrarJuego(true);
    setPuntaje2(0);
    setPuntaje(0);
    setMostrarFelicitaciones(false);
  };

  const alTerminar = (puntaje) => {
    if (turno === 1) {
      setPuntaje(puntaje);
    } else {
      setPuntaje2(puntaje2);
    }
    setMostrarJuego(false);
    setMostrarFelicitaciones(true);
  };

  if (!mostrarJuego && !mostrarFelicitaciones) {
    return (
      <div className="text-center">
        <h1 className="mt-5">What's your name, Player 1?</h1>
        <input
          className="w-50 fs-5 mt-5 text-center"
          required
          type="text"
          placeholder="Player 1"
          onChange={(e) => setNombreJugador(e.target.value)}
        />

        <h1 className="mt-5 ">What's your name, Player 2?</h1>
        <input
          className="w-50 fs-5 mt-5 text-center"
          required
          type="text"
          placeholder="Player 2"
          onChange={(e) => setNombreJugador2(e.target.value)}
        />
        <div className="mt-5 fs-5">
          <button className='boton'
            onClick={() => manejarClickJugar(nombreJugador, nombreJugador2)}
          >
            Play
          </button>
        </div>
      </div>
    );
  } else if (mostrarJuego) {
    return (
      <div>
        <Juego
          nombreJugador={nombreJugador}
          nombreJugador2={nombreJugador2}
          puntaje={puntaje}
          puntaje2={puntaje2}
          setPuntaje2={setPuntaje2}
          setPuntaje={setPuntaje}
          alTerminar={alTerminar}
          rondaActual={rondaActual}
          setRondaActual={setRondaActual}
          setTurno={setTurno}
          turno={turno}
        />
      </div>
    );
  } else if (mostrarFelicitaciones) {
    return (
      <div>
        <Felicitaciones
          nombreJugador={nombreJugador}
          puntaje={puntaje}
          nombreJugador2={nombreJugador2}
          puntaje2={puntaje2}
        />
      </div>
    );
  }
}

export default Inicio;
