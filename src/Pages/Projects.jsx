import projects from "../data/projects";
import Header from '../components/Header'

const Projects = () => {
    
    return (
        <>
            <Header />
            <h1>Proyectos</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name} width='200'/>
                        <p>{project.description}</p>
                        <a href={project.url} target='_blank'>Enlace del proyecto</a>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Projects;