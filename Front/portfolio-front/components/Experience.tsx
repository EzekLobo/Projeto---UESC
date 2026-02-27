import { Experiencia } from "@/types";

export default function Experience({ experiencias }: { experiencias: Experiencia[] }) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Experiência <span className="text-brand-red">Profissional</span></h2>
          <div className="h-1 w-20 bg-brand-red rounded mt-4"></div>
        </div>

        <div className="space-y-12 border-l-2 border-white/10 ml-3 pl-8 relative">
          {experiencias?.map((exp) => (
            <div key={exp.id} className="relative group">
              <span className="absolute -left-[41px] top-2 w-5 h-5 rounded-full bg-brand-red border-4 border-brand-dark group-hover:scale-125 transition-all" />
              <h3 className="text-xl font-bold">{exp.empresa}</h3>
              <p className="text-brand-red font-mono text-xs mb-2 uppercase">
                {exp.data_inicio} - {exp.atual ? 'Atual' : exp.data_fim}
              </p>
              <p className="text-gray-300 text-sm font-semibold mb-2">{exp.cargo}</p>
              
              <div className="bg-white/5 p-4 rounded-lg border border-white/5 mb-4">
                <p className="text-gray-400 text-sm leading-relaxed">{exp.descricao}</p>
              </div>

              <div className="flex gap-2 flex-wrap">
                {/* O segredo está aqui: ? verifica se o campo existe antes do split */}
                {exp.tecnologias_usadas?.split(',').map((tech) => (
                  <span key={tech} className="text-[10px] border border-white/10 px-2 py-1 rounded text-gray-500 uppercase">
                    {tech.trim()}
                  </span>
                )) || <span className="text-xs text-gray-600 italic">Nenhuma tecnologia especificada</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}