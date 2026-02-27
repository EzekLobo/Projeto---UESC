// src/app/page.tsx
import { getPerfil, getExperiencias, getProjetos } from "@/services/api";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import ProjectSlider from "@/components/ProjectSlider";

export default async function Home() {
  // Chamadas em paralelo para performance
  const [perfil, experiencias, projetos] = await Promise.all([
    getPerfil(),
    getExperiencias(),
    getProjetos(),
  ]);

  return (
    <main className="bg-brand-dark text-white min-h-screen relative overflow-x-hidden">
      {/* Background Patterns */}
      <div className="fixed inset-0 bg-grid-pattern bg-[size:40px_40px] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-brand-dark/80 to-brand-dark pointer-events-none z-0" />
      
      <Navbar />
      
      <div className="relative z-10">
        <Hero perfil={perfil} />
        
        <Experience experiencias={experiencias} />
        
        <section id="projects" className="py-24 border-t border-white/5 overflow-hidden bg-black/20">
           <div className="max-w-7xl mx-auto px-6 mb-8">
              <h2 className="text-3xl font-bold">Meus <span className="text-brand-red">Projetos</span></h2>
              <div className="h-1 w-12 bg-brand-red rounded mt-2"></div>
           </div>
           {/* O Slider precisa ser um Client Component devido aos eventos de scroll/drag */}
           <ProjectSlider projetos={projetos} />
        </section>
      </div>

      <footer className="py-12 border-t border-white/5 text-center relative z-10">
        <p className="text-gray-600 text-xs">© 2026 {perfil.nome}. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}