import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {studies, experiences} from '../data/resume';
import Header from '../components/Header';

const Resume = () => {
    /* const [myStudies, setMyStudies] = useState([]);
    const [myExperience, setMyExperience] = useState([]);

    useEffect(() => {
        setMyStudies(studies);
        setMyExperience(experiences);
    }, []); */

    return (
        <>
            <Header />
            <h1>Currículum</h1>

            <h2>Formación</h2>
            <ul>
                {studies.map(study => (
                    <li key={study.id}>
                        <h3>{study.title}</h3>
                        <p>{study.institution}</p>
                        <p>{study.date}</p>
                    </li>
                ))}
            </ul>

            <h2>Experiencia laboral</h2>
            <ul>
                {experiences.map(experience => (
                    <li key={experience.id}>
                        <h3>{experience.title}</h3>
                        <p>{experience.company}</p>
                        <p>{experience.date}</p>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default Resume;