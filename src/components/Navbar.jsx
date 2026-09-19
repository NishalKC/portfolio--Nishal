const Navbar = () => {
  return (
    <div className="bg-zinc-900 text-white w-full">
      <nav className="max-w-7xl mx-auto h-16 flex items-center md:justify-evenly px-6 md:px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-500">PortFolio</h1>
        <div className="hidden md:flex items-center justify-between gap-19">
          <ul className="list-none flex gap-10">
            <li className="cursor-pointer hover:text-blue-400 transition-colors">Home</li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">Skills</li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">Projects</li>
            <li className="cursor-pointer hover:text-blue-400 transition-colors">Contact</li>
          </ul>
          <a href="https://github.com/NishalKC/" className="border px-3 py-1 border-blue-500 cursor-pointer text-blue-400 ">Github profile</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
