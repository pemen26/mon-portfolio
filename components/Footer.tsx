import { personalInfo } from "@/data";

export default function Footer() {
  return (
    <footer className="border-t border-red-900/30 bg-black py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm mt-2">© 2026 Christian Pemen</p>
        </div>
        
        <div className="flex gap-6">
          <a href={personalInfo.github} target="_blank" className="text-gray-400 hover:text-red-500 transition font-mono uppercase text-sm">GitHub</a>
          <a href={personalInfo.linkedin} target="_blank" className="text-gray-400 hover:text-red-500 transition font-mono uppercase text-sm">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}