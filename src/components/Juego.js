import React, { useState, useEffect } from 'react';

function Juego({ nombreJugador, puntaje, setPuntaje, alTerminar, rondaActual,setRondaActual,setPuntaje2, nombreJugador2, puntaje2, setTurno, turno}) {
    const [animalObjetivo, setAnimalObjetivo] = useState('');
    const [opciones, setOpciones] = useState([]);
    const [esCorrecto, setEsCorrecto] = useState(null);
    const [rondasTotales, setRondasTotales] = useState(Math.floor(Math.random() * 6) + 5);
    const [puedeHacerClic, setPuedeHacerClic] = useState(true);


   

    const obtenerAnimalAleatorio = () => {
        const animales = ['Cat', 'Dog', 'Cow', 'Lion', 'Giraffe', 'Zebra', 'Monkey', 'Llama', 'Dove'];
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
                    setPuntaje(puntaje+1);
                    
                } else {
                    setPuntaje2(puntaje2+1);
                    
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

            if (turno === 1) {
                setTurno(2);    
            } else {
                setTurno(1);
            }
            
            setEsCorrecto(null);
            setPuedeHacerClic(true);
            obtenerOpcionesAleatorias();
        } else {
            alTerminar(puntaje, puntaje2);
        }
    };

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
            <h1>{jugador}, What animal is this??</h1>
            <p>Round: {rondaActual}</p>
            <img src={`img/${animalObjetivo}.png`} alt={animalObjetivo} />
            <div>
                {opciones.map((animal) => (
                    <button
                        key={animal}
                        onClick={() => verificarRespuesta(animal)}
                        disabled={!puedeHacerClic || opcionesDeshabilitadas}
                    >
                        {animal}
                    </button>
                ))}
            </div>
            {esCorrecto === true && <p>Great job! Keep it up</p>}
            {esCorrecto === false && <p> That's not it, but don't give up, you can do it!</p>}
            <button onClick={siguienteRonda}>Next</button>
        </div>
    );
}

export default Juego;