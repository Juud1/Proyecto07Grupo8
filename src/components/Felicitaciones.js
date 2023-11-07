import '../components/css/StyleFelicitaciones.css'

function Felicitaciones({ nombreJugador, puntaje, nombreJugador2, puntaje2, resultado }) {
    return (
        <div className="conteiner">
            <h1 className="title">Congratulations, {nombreJugador}!</h1>
            <p className="score">Your score is: {puntaje}</p>

            <h1 className="title">Congratulations, {nombreJugador2}!</h1>
            <p className="score">Your score is: {puntaje2}</p>

            <h2 className="title">{resultado}</h2> {/* Muestra el resultado del juego */}
        </div>
    );
}

export default Felicitaciones;