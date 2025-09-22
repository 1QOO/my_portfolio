const Project = ({project})=>{
    return (
        <div className="flex flex-col md:lg:flex-row flex-nowrap gap-[1.5rem] w-full grow p-[1rem] shadow-[0_0_5px_1px_gray] rounded-[20px]">
            <img className="max-h-[300px] max-w-[300px] object-contain shrink-1 grow-0" src={project.img} alt={project.title} />
            <div>
                <h3 className="text-2xl">{project.title}</h3>
                <p>
                    {project.desc}
                </p>
                <h4 className="font-bold mt-2">Tech Stack</h4>
                <ul>
                    {project.techStack.map(item=><li>{item}</li>)}
                </ul>
                {project.features && 
                <>
                <h4 className="font-bold mt-2">Features</h4>
                <ul>
                    {project.features.map(item=><li>{item}</li>)}
                </ul>
                </>
                }
                <div className="my-3">
                    Git link <a href={project.gitLink} target="_blank" className="text-blue-500">{project.gitLink}</a><br />
                    {project.demoLink && <>Demo link <a href={project.demoLink} target="_blank" className="text-blue-500">{project.demoLink}</a></>}
                </div>
            </div>
        </div>
    )
}

export default Project;