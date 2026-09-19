const Skills = () => {
const languages = [
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  }
];

const frameworks = [
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Pandas",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"
  },
  {
    name: "Scikit-learn",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"
  },
  {
  name: "NumPy",
  image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
  },
  {
    name: "Matplotlib",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg"
  },
  {
    name: "Express.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  }
];

const tools = [
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "GitHub",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  {
    name: "Postman",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
  }
];

  return (
    <div id="Skills" className='bg-zinc-800 mt-10 flex flex-col px-10 py-10'>
      <h1 className="text-4xl mb-4"> Skills & technologies</h1>
      <div className="flex flex-col gap-3 mt-5">
          <div>
            <h1 className="text-2xl text-zinc-400">Language</h1>
            <div className="flex gap-5 px-4 py-5"> 
              {languages.map((language, index) => {
              return (
                
              <div key={index} className="bg-zinc-700 cursor-pointer gap-1 px-3 py-1 flex rounded-md hover:bg-zinc-600 transition-all">
                <img className="h-5 rounded-md" src={language.image} alt="" />
                <h1>{language.name}</h1>
              </div>
                 
              )}
              )}
            </div>
          </div>
         <div>
            <h1 className="text-2xl text-zinc-400">Frameworks</h1>
            <div className="flex gap-5 flex-wrap px-4 py-5">
              {frameworks.map((framework, index) => {
              return (
                
              <div key={index} className="bg-zinc-700 cursor-pointer gap-1 px-3 py-1 flex  rounded-md hover:bg-zinc-600 transition-all">
                <img className="h-5 rounded-md " src={framework.image} alt="" />
                <h1>{framework.name}</h1>
              </div>
                 
              )}
              )}
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-zinc-400">Tools & Others</h1>
            <div className="flex flex-wrap gap-5 px-4 py-5"> 
              {tools.map((tool, index) => {
              return (
                
              <div key={index} className="bg-zinc-700 cursor-pointer gap-1 px-3 min-w-fit py-1 flex rounded-md hover:bg-zinc-600 transition-all">
                <img className="h-5 rounded-md" src={tool.image} alt="" />
                <h1>{tool.name}</h1>
              </div>
                 
              )}
              )}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Skills