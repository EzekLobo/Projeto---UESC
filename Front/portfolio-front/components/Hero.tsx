import Image from "next/image";
import { Perfil } from "@/types";

export default function Hero({ perfil }: { perfil: Perfil }) {
  const nomeCompleto = perfil?.nome || "Ezequiel Lobo Oliveira";
  const nomes = nomeCompleto.split(' ');
  const primeiroNome = nomes[0];
  const restoNome = nomes.slice(1).join(' ');

  return (
    <header id="home" className="min-h-screen flex items-center relative pt-20 z-10">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-[128px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative">
        
        <div className="space-y-8 order-2 lg:order-1 animate-enter">
          <div className="space-y-2 text-center lg:text-left">
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1]">
              {primeiroNome} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-600">
                {restoNome}.
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-brand-red font-mono font-medium pt-2">
              &lt; {perfil?.cargo || "Full Stack Developer"} /&gt;
            </h2>
          </div>
          
          <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed border-l-4 border-brand-red/50 pl-4 mx-auto lg:mx-0">
            {perfil?.bio || "Carregando informações do perfil..."}
          </p>

          <div className="flex flex-nowrap gap-3 pt-2 justify-center lg:justify-start">
            {/* Botão de Download CV */}
            {perfil?.cv && (
              <a href={perfil.cv} download className="group flex items-center justify-center gap-3 bg-brand-red text-white hover:bg-red-600 px-4 py-3.5 md:px-8 rounded-xl font-bold transition-all shadow-[0_0_20px_-5px_rgba(255,51,51,0.3)] hover:shadow-[0_0_20px_-5px_rgba(255,51,51,0.5)]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                <span className="font-mono text-sm hidden md:inline">Baixar CV</span>
              </a>
            )}
            
            {/* Botão GitHub corrigido  */}
            <a href={perfil?.github || "https://github.com/EzekLobo"} target="_blank" className="flex items-center justify-center gap-2 px-4 py-3.5 md:px-5 rounded-xl font-bold text-gray-400 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
              <span className="font-mono text-sm hidden md:inline">GitHub</span>
            </a>
            
            {/* Botão LinkedIn corrigido  */}
            <a href={perfil?.linkedin || "https://linkedin.com/in/ezeklobo"} target="_blank" className="flex items-center justify-center gap-2 px-4 py-3.5 md:px-5 rounded-xl font-bold text-gray-400 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10 transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
              </svg>
              <span className="font-mono text-sm hidden md:inline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Card da Foto */}
        <div className="relative flex justify-center mt-8 lg:mt-0 h-full items-center order-1 lg:order-2">
          <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-2xl border border-white/10 shadow-2xl w-48 md:w-80 rotate-3 hover:rotate-0 transition-transform duration-500 group mx-auto">
            {/* Tag Open to Work */}
            <div className="absolute -top-5 -right-2 z-20 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-950/90 border border-green-500/30 text-green-400 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Open to Work
            </div>

            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-brand-card">
              {perfil?.foto ? (
                <Image 
                  src={perfil.foto} 
                  alt={nomeCompleto} 
                  fill 
                  unoptimized
                  className="object-cover hover:scale-105 transition-transform duration-700 grayscale-[20%] group-hover:grayscale-0"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-700 font-mono text-xs text-center p-4">
                  Adicione uma foto no Admin
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}