import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="Contact" className="bg-zinc-800 px-10 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-white">Get In Touch</h1>

        <p className="text-zinc-400 mt-3">
          Interested in collaborating, building a project, or just saying hello?
          Feel free to reach out.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href="mailto :n56007185@email.com"
            className="flex items-center gap-3 p-4 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition-colors"
          >
            <Mail className="text-blue-400" size={20} />
            <span className="text-zinc-200">n56007185@email.com</span>
          </a>
          <a
            href="https://github.com/NishalKC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition-colors"
          >
            <FaGithub className="text-blue-400 text-xl" />
            <span className="text-zinc-200">github.com/NishalKC</span>
          </a>
          <a
            href="https://linkedin.com/in/nishal-kc-289662359/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-xl bg-zinc-700 hover:bg-zinc-600 transition-colors"
          >
            <FaLinkedin className="text-blue-400 text-xl" />
            <span className="text-zinc-200">LinkedIn Profile</span>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-700">
            <MapPin className="text-blue-400" size={20} />
            <span className="text-zinc-200">Nepal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;