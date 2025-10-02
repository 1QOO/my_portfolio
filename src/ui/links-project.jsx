export function LinksProject({project}){
    return (
        <div className="flex flex-row justify-between md:lg:justify-start md:lg:gap-12 p-4">
            <a href={project.gitLink} target="_blank" className="block bg-gray-800 px-4 py-2 rounded-md text-white hover:shadow-[0_0_4px_2px_darkgray]">Git link</a><br />
            {project.demoLink && 
            <a href={project.demoLink} target="_blank" className="block bg-gray-800 px-4 py-2 rounded-md text-white hover:shadow-[0_0_4px_2px_darkgray]">Demo link</a>}
        </div>
    )
}