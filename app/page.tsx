import { personalInfo } from "@/data";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        
        <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
          Christian <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 glow-text">
            Pemen
          </span>
        </h1>

        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl font-light mb-12 border-l-2 border-red-600 pl-6">
          {personalInfo.bio}
        </p>

        <div className="flex flex-wrap gap-6">
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-red-600 text-black font-bold uppercase tracking-wider hover:bg-white hover:glow-box transition-all duration-300"
          >
            Voir les Projets
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 border border-red-600/50 text-red-500 font-bold uppercase tracking-wider hover:bg-red-600/10 transition-all duration-300"
          >
            Me Contacter
          </Link>
        </div>
      </div>
    </div>
  );
}