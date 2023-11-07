function Felicitaciones({ nombreJugador, puntaje, nombreJugador2, puntaje2, resultado }) {
    return (
        <div>
            <h1>Congratulations, {nombreJugador}!</h1>
            <p>Your score is: {puntaje}</p>

            <h1>Congratulations, {nombreJugador2}!</h1>
            <p>Your score is: {puntaje2}</p>

            <h2>{resultado}</h2> {/* Muestra el resultado del juego */}
        </div>
    );
}

export default Felicitaciones;
