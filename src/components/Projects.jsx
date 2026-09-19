import ProjectCard from "./ProjectCard"

const Projects = () => {
    const projects = [
  {
    title: "Blogify",
    description:
      "A full-stack blog application where users can register, log in, create, edit, delete, and manage blog posts with cover images, categories, and tags.",
    createdDate: 2026,
    technologies: [
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Multer",
      "Cloudinary"
    ]
  },
  {
    title: "Social Media App",
    description:
      "A backend-focused social media application where users can authenticate, create posts, like posts, upload profile images, and manage their profiles.",
    createdDate: 2026,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "EJS",
      "MongoDB",
      "JWT",
      "Multer",
      "Bcrypt"
    ]
  },
  {
    title: "Scatch Store",
    description:
      "An Amazon-like e-commerce application where users can browse products, add items to cart, authenticate accounts, and manage products.",
    createdDate: 2026,
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "EJS",
      "MongoDB",
      "JWT",
      "Multer",
      "Bcrypt"
    ]
  },
  {
    title: "HeartStroke Predictor",
    description:
      "A machine learning web application that predicts heart stroke risk using patient health data and classification algorithms.",
    createdDate: 2026,
    technologies: [
      "Python",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib"
    ]
  }
];


  return (
    <div className="mt-15 px-5 md:px-10 py-5  flex flex-col gap-4">
        <h1 className="text-4xl">Projects</h1>
        <div className="flex flex-col mt-5 md:flex-row flex-wrap gap-6 md:p-3">
            {projects.map((project, index) => {
                return <ProjectCard  key={index} project={project}/>
            }
            )}
        </div>
    </div>
  )
}

export default Projects