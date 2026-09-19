const ProjectCard = ({project}) => {
  return (
    <div id="ProjectCard" className="w-full md:w-90 flex flex-col justify-between gap-5 border  border-zinc-700  px-7 py-3 rounded-md hover:shadow shadow-zinc-500  transition-all">
        <h1 className="text-3xl">{project.title}</h1>
        <h1 className="text-zinc-400">{project.createdDate}</h1>
        <h1 className="text-zinc-400 h-19 line-clamp-3 leading-relaxed">{project.description} </h1>
        <a href="">Read More</a>
        <div className="flex gap-3 flex-wrap mb-4  py-1">
            {project.technologies.map((tech, index) => { 
                return <h1 key={index} className="px-4 tracking-tighter cursor-pointer py-1 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors">{tech}</h1>
            }
            )}
        </div>
    </div>
  )
}

export default ProjectCard