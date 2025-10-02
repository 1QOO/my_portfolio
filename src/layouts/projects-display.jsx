import Project from './../ui/project'
import projects from './../data/projects.js'

const ProjectsDisplay = ()=>{
    return (
        <section className="w-full">
            <h2 className="bg-gray-800 p-4 text-[1.5rem] text-white">My Projects</h2>
            <div className='flex flex-col flex-wrap p-4 gap-[2rem] justify-center items-center'>
                {projects.map(project=> <Project key={project.title} project={project} />)}
            </div>
        </section>
    )
}

export default ProjectsDisplay;