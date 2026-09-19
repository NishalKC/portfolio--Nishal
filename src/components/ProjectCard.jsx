import { useState } from "react"

const ProjectCard = ({project}) => {
    const [ReadMore, setReadMore] = useState(false)

    const handleRead = () => {
        setReadMore(!ReadMore)
    }
    
  return (
    <div id="ProjectCard" className="min-h-fit w-full md:w-90 flex flex-col gap-5 border  border-zinc-700  px-7 py-3 rounded-md hover:shadow shadow-zinc-500  transition-all">
        <h1 className="text-3xl">{project.title}</h1>
        <h1 className="text-zinc-400">{project.createdDate}</h1>
        {ReadMore? (
            <div>
            <h1 className="text-zinc-400  leading-relaxed">{project.description} </h1>
            <button onClick={handleRead} className="cursor-pointer text-zinc-300 hover:underline transition-all">Read less</button>
            </div>
        ):(
            <div>
            <h1 className="text-zinc-400 h-19 line-clamp-3 leading-relaxed">{project.description} </h1>
            <button onClick={handleRead} className="cursor-pointer text-zinc-300 hover:underline transition-">Read More</button>
            </div>
        )}
        <div className="flex gap-3 flex-wrap py-1">
            {project.technologies.map((tech, index) => { 
                return <h1 key={index} className="px-4 tracking-tighter cursor-pointer py-1 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors">{tech}</h1>
            }
            )}
        </div>
        <h1 className="text-zinc-400 text-xl hover:underline cursor-pointer transform-all">visit </h1>
    </div>
  )
}

export default ProjectCard