// Componente Juego
import React, { useState, useEffect } from "react";

function Juego({
  nombreJugador,
  puntaje,
  setPuntaje,
  alTerminar,
  rondaActual,
  setRondaActual,
  setPuntaje2,
  nombreJugador2,
  puntaje2,
  setTurno,
  turno,
  rondasTotales,
  setRondasTotales,
}) {
  const [animalObjetivo, setAnimalObjetivo] = useState("");
  const [opciones, setOpciones] = useState([]);
  const [esCorrecto, setEsCorrecto] = useState(null);
 
  const [puedeHacerClic, setPuedeHacerClic] = useState(true);

  const obtenerAnimalAleatorio = () => {
    const animales = [
      "Cat",
      "Dog",
      "Cow",
      "Lion",
      "Giraffe",
      "Zebra",
      "Monkey",
      "Llama",
      "Dove",
    ];
    const indiceAleatorio = Math.floor(Math.random() * animales.length);
    return animales[indiceAleatorio];
  };

  const obtenerOpcionesAleatorias = () => {
    const animalCorrecto = obtenerAnimalAleatorio();
    let opcionesAleatorias = [animalCorrecto];

    while (opcionesAleatorias.length < 3) {
      const opcion = obtenerAnimalAleatorio();
      if (!opcionesAleatorias.includes(opcion)) {
        opcionesAleatorias.push(opcion);
      }
    }

    opcionesAleatorias = opcionesAleatorias.sort(() => Math.random() - 0.5);

    setOpciones(opcionesAleatorias);
    setAnimalObjetivo(animalCorrecto);
  };

  const verificarRespuesta = (animalSeleccionado) => {
    if (animalSeleccionado === animalObjetivo) {
      if (turno === 1) {
        setPuntaje(puntaje + 1);
      } else {
        setPuntaje2(puntaje2 + 1);
      }
      setEsCorrecto(true);
    } else {
      setEsCorrecto(false);
    }
    setPuedeHacerClic(false);
  };

  const siguienteRonda = () => {
    if (rondaActual < rondasTotales) {
      setRondaActual(rondaActual + 1);
  
      if (rondaActual % (rondasTotales / 2) === 0) {
        // Cambia al siguiente turno solo cuando ambos jugadores hayan jugado la misma cantidad de rondas.
        setTurno(turno === 1 ? 2 : 1);
      }
  
      setEsCorrecto(null);
      setPuedeHacerClic(true);
      obtenerOpcionesAleatorias();
    } else {
      alTerminar(puntaje, puntaje2);
    }
  }

  const opcionesDeshabilitadas = esCorrecto !== null;

  useEffect(() => {
    obtenerOpcionesAleatorias();
  }, []);

  let jugador;
  if (turno === 1) {
    jugador = nombreJugador;
  } else {
    jugador = nombreJugador2;
  }

  return (
    <div>
      <h1 className="text-center mt-5">{jugador}, What animal is this??</h1>
      <p className="text-center mt-5">Round: {rondaActual}</p>
      <div className="text-center">
        <img src={`img/${animalObjetivo}.png`} alt={animalObjetivo} />
      </div>
      <div className=' d-flex botonJuego'>
        {opciones.map((animal) => (
          <button className="btn btn-primary mx-3 mt-5 botonOpcion"
            key={animal}
            onClick={() => verificarRespuesta(animal)}
            disabled={!puedeHacerClic || opcionesDeshabilitadas}
          >
            {animal}
          </button>
        ))}
      </div>
      {esCorrecto === true && <p className="text-center fs-1 my-5">Great job! Keep it up!</p>}
      {esCorrecto === false && (
        <p className="text-center fs-1 my-5"> That's not it, but don't give up, you can do it!</p>
      )}
      <div className="text-center mt-5">
      <button className="btn btn-success botonOpcion" onClick={siguienteRonda}>Next</button>
      </div>
    </div>
  );
}

export default Juego;