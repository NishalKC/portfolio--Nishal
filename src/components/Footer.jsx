import {  Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-10 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <h2 className="text-2xl font-semibold text-white">Nishal KC</h2>

        <p className="text-zinc-400 max-w-md">
          Full-Stack Developer & AI/ML Learner from Nepal, building modern web
          applications and machine learning projects.
        </p>

        <div className="flex gap-6 text-zinc-300">
          <a
            href="mailto:your-email@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://github.com/NishalKC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        <div className="w-full h-px bg-zinc-700 my-3" />

        <p className="flex items-center gap-2 text-sm text-zinc-500">
          © 2026 Nishal KC. Built with React & Tailwind CSS.
          <Heart size={16} className="text-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;