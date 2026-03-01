import { projects } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/projects" className="text-gray-500 hover:text-red-500 uppercase text-xs tracking-widest mb-8 block">
        ← Retour aux projets
      </Link>

      <h1 className="text-5xl md:text-7xl font-black text-white uppercase mb-6 glow-text">
        {project.title}
      </h1>

      <div className="flex flex-wrap gap-4 mb-12">
        {project.technologies.map((tech) => (
          <span key={tech} className="px-4 py-2 bg-red-600/10 border border-red-600/30 text-red-500 text-sm font-bold uppercase">
            {tech}
          </span>
        ))}
      </div>

      <div className="aspect-video w-full bg-gray-900 border border-gray-800 mb-12 overflow-hidden relative">
        {project.imageUrl && (
           <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
        )}
      </div>

      <div className="prose prose-invert prose-lg max-w-none mb-12">
        <h3 className="text-white font-bold uppercase">Description</h3>
        <p className="text-gray-400">{project.description}</p>
      </div>

      <div className="flex gap-6">
        {project.repoUrl && (
          <a href={project.repoUrl} target="_blank" className="px-8 py-3 bg-white text-black font-bold uppercase hover:bg-red-600 hover:text-white transition-colors">
            Voir le Code (GitHub)
          </a>
        )}
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" className="px-8 py-3 border border-white text-white font-bold uppercase hover:bg-white hover:text-black transition-colors">
            Démo Live
          </a>
        )}
      </div>
    </div>
  );
}