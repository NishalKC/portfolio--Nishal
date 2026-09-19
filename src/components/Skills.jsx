const Skills = () => {
  return (
    <div className='bg-zinc-800 mt-10 flex flex-col px-10 py-9'>
      <h1 className="text-4xl mb-4"> Skills & technologies</h1>
      <div className="flex flex-col gap-3 mt-5">
          <div>
            <h1 className="text-2xl text-zinc-400">Language</h1>
            <div className="flex gap-5 px-4 py-5"> 
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">Javascript</h1>
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">Python</h1>
            </div>
          </div>
         <div>
            <h1 className="text-2xl text-zinc-400">Frameworks</h1>
            <div className="flex gap-5 px-4 py-5"> 
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">React</h1>
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">Node.js</h1>
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">Express.js</h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-zinc-400">Tools & Others</h1>
            <div className="flex gap-5 px-4 py-5"> 
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">Git & Github </h1>
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">Postman</h1>
              <h1 className="bg-zinc-700 cursor-pointer px-3 py-1 rounded-md hover:bg-zinc-600 transition-all">TailwindCSS</h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills