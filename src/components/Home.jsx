import coverImage from "../assets/Nishal.jpg"
const Home = () => {
  return (
    <div id="Home" className=" md:mt-10 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-10 px-6 py-16 md:justify-around md:flex-row md:py-19">
      <div className="max-w-xl text-center align-middle md:text-left">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Hi, I am <br /> <span className="text-blue-500">Nishal KC</span>
        </h1>
        <p className="mt-4 text-xl text-zinc-400 md:text-2xl">
          I am a Full Stack Developer
        </p>
        <p className="mt-3 w-90 md:w-110 tracking-tight">
            I'm Nishal KC, a passionate developer from Nepal who enjoys building modern web
            applications and exploring AI, Machine Learning, and game development. I love
            turning ideas into real projects and continuously learning new technologies to
            grow as a software engineer.
          </p>
        <button className="text-blue-500 border border-blue-400 px-3 py-1 mt-5 rounded-md hover:bg-blue-500 hover:text-white transition-colors">Contact me</button>
      </div>
      <div className="flex justify-center">
        <img 
          src={coverImage} 
          alt="Nishal KC" 
          className="h-64 w-64 rounded-full border-4 border-blue-500 object-cover shadow-lg md:h-80 md:w-80"
        />
      </div>
    </div>
  )
}

export default Home
