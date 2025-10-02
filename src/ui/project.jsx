import { LinksProject } from "./links-project"
import { motion } from 'framer-motion'

export default function Project({project}){
    return (
        <motion.div className="flex flex-col md:lg:flex-row flex-nowrap gap-[1.5rem] w-full grow p-[1rem] shadow-[0_0_5px_1px_gray] rounded-[20px]"
        initial={{opacity:0 , x:"100%"}}
        whileInView={{opacity:1 , x:0}}
        transition={{duration: 1}}
        viewport={{once: true}}>
            <img className="max-h-[300px] max-w-[300px] object-contain shrink-1 grow-0" src={project.img} alt={project.title} />
            <div className="grow">
                <h3 className="text-2xl">{project.title}</h3>
                <p>
                    {project.desc}
                </p>
                <h4 className="font-bold mt-2">Tech Stack</h4>
                <ul>
                    {project.techStack.map((item,i)=><li key={i}>{item}</li>)}
                </ul>
                {project.features && 
                <>
                <h4 className="font-bold mt-2">Features</h4>
                <ul>
                    {project.features.map((item,i)=><li key={i}>{item}</li>)}
                </ul>
                </>
                }
                <LinksProject project={project} />
            </div>
        </motion.div>
    )
}