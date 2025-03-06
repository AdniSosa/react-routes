import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>¡Hola👋🏽, soy Juan Pérez!</h1>
            <h2>Programar es mi pasión 😍</h2>
            <Link to='/projects'>Proyectos</Link>
            <Link to='/resume'>Currículum</Link>
        </>
    )
}

export default Home;