import { personalInfo, skills } from "@/data";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl md:text-6xl font-black mb-16 uppercase border-b border-red-900/30 pb-8">
        À Propos <span className="text-red-600">.</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <div className="prose prose-invert">
            <h3 className="text-2xl font-bold text-white mb-4">MON PARCOURS</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Je suis {personalInfo.name}, originaire du Cameroun où j'ai obtenu mon Baccalauréat Scientifique en 2023, j'ai poursuivi mon cursus par deux années de Classes Préparatoires aux Grandes Écoles. Ce parcours exigeant m'a permis d'acquérir une grande discipline de travail et des capacités d'analyse poussées. Actuellement étudiant à l'IIM Digital School, je me consacre au développement de projets concrets. Mon objectif est d'allier rigueur académique et innovation technique pour répondre à des problématiques complexes par des interfaces simples et efficaces.
            </p>
          </div>

          <div className="space-y-6">
             <h3 className="text-2xl font-bold text-white mb-6">ARSENAL TECHNIQUE</h3>
             <div className="grid gap-6">
               {skills.map((group) => (
                 <div key={group.category} className="bg-white/5 p-6 border border-white/10 hover:border-red-600/50 transition duration-300">
                   <h4 className="text-red-500 font-mono text-sm uppercase tracking-widest mb-4">{group.category}</h4>
                   <div className="flex flex-wrap gap-2">
                     {group.items.map((skill) => (
                       <span key={skill} className="bg-black border border-gray-800 text-gray-300 px-3 py-1 text-xs uppercase font-bold">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        <div className="relative group">
            <div className="absolute inset-0 bg-red-600 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            <div className="relative aspect-[3/4] bg-gray-900 overflow-hidden border border-gray-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                    src="/profile2.jpeg" 
                    alt={personalInfo.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
        </div>
      </div>
    </div>
  );
}