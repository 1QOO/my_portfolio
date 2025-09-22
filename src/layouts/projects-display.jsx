import Project from './../comps/project'
import projects from './../data/projects.js'

const ProjectsDisplay = ()=>{
    return (
        <section className="p-[1rem] w-full">
            <h2 className="text-[1.5rem] m-[1rem]">My Projects</h2>
            <div className='flex flex-col flex-wrap gap-[2rem] justify-center items-center'>
                {projects.map(project=> <Project project={project} />)}
            </div>
        </section>
    )
}

export default ProjectsDisplay;