import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const Projects = () => {
    const [myProyects, setMyProjects] = useState([]);

    useEffect(() => {
        setMyProjects(projects)
    }, []);

    return (
        <>
            <h1>Proyectos</h1>
            <ul>
                {myProyects.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image}/>
                        <p>{project.description}</p>
                        <a href={project.url}>Enlace del proyecto</a>
                    </li>
                ))}
            </ul>
            <Link to='/'>Volver a Home</Link>
        </>
    )
}

export default Projects;