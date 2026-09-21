import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between md:justify-evenly px-6 py-4 bg-zinc-900 text-white">
      <h1 className="text-xl font-bold">Portfolio</h1>
      <div className="hidden md:flex gap-8 items-center">
        <a href="#Home" className="p-1 hover:text-blue-500 transition-colors">Home</a>
        <a href="#Projects" className="p-1 hover:text-blue-500 transition-colors">Projects</a>
        <a href="#Skills" className="p-1 hover:text-blue-500 transition-colors">Skills</a>
        <a href="#Contact" className="p-1 hover:text-blue-500 transition-colors">Contact</a>

        
      </div>
      <a
          href="https://github.com/NishalKC"
          target="_blank"
          rel="noopener noreferrer"
          className="border hidden md:flex border-blue-500 px-3 py-1 rounded-md text-blue-400 hover:bg-blue-500 hover:text-white transition"
        >
          GitHub
        </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 right-6 w-52 bg-zinc-800 rounded-xl p-4 md:hidden shadow-lg">
          <ul className="flex flex-col gap-4">
            <li><a href="#Home" onClick={() => setOpen(false)}>Home</a></li>
            <li><a href="#Skills" onClick={() => setOpen(false)}>Skills</a></li>
            <li><a href="#Projects" onClick={() => setOpen(false)}>Projects</a></li>
            <li><a href="#Contact" onClick={() => setOpen(false)}>Contact</a></li>
          </ul>

          <a
            href="https://github.com/NishalKC"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 border border-blue-500 text-blue-400 text-center py-2 rounded-md hover:bg-blue-500 hover:text-white transition"
          >
            GitHub Profile
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;