import React from 'react';

function Felicitaciones({ nombreJugador, puntaje, nombreJugador2, puntaje2 }) {
    return (
        <div>
            <h1>Congratulations, {nombreJugador}!</h1>
            <p>Your score is: {puntaje}</p>

            <h1>Congratulations, {nombreJugador2}!</h1>
            <p>Your score is: {puntaje2}</p>
        </div>
    );
}

export default Felicitaciones;