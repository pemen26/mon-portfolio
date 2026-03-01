import { projects } from "@/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-black mb-16 uppercase border-b border-red-900/30 pb-8">
        Projets <span className="text-red-600">.</span>
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link 
            key={project.slug} 
            href={`/project/${project.slug}`}
            className="group block bg-[#0a0a0a] border border-white/10 hover:border-red-600 transition-all duration-300"
          >
            <div className="aspect-video bg-gray-900 relative overflow-hidden">
               <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-all"></div>
               {project.imageUrl && (
                 <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0" />
               )}
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-black text-white uppercase mb-2 group-hover:text-red-500 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex gap-2">
                {project.technologies.slice(0, 3).map(tech => (
                  <span key={tech} className="text-[10px] uppercase tracking-wider text-red-500/80 border border-red-900/30 px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}