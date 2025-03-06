import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {studies, experiences} from '../data/resume'

const Resume = () => {
    const [myStudies, setMyStudies] = useState([]);
    const [myExperience, setMyExperience] = useState([]);

    useEffect(() => {
        setMyStudies(studies);
        setMyExperience(experiences);
    }, []);

    return (
        <>
            <h1>Currículum</h1>

            <h2>Formación</h2>
            <ul>
                {myStudies.map(study => (
                    <li>
                        <h3>{study.title}</h3>
                        <p>{study.institution}</p>
                        <p>{study.date}</p>
                    </li>
                ))}
            </ul>

            <h2>Experiencia laboral</h2>
            <ul>
                {myExperience.map(experience => (
                    <li>
                        <h3>{experience.title}</h3>
                        <p>{experience.company}</p>
                        <p>{experience.date}</p>
                    </li>
                ))}
            </ul>

            <Link to='/'>Volver a Home</Link>
        </>
    )
}

export default Resume;