import Image from "next/image";
import { Perfil } from "@/types";

export default function Hero({ perfil }: { perfil: Perfil }) {
  // Fallback para nomes e dados vazios
  const nomeCompleto = perfil?.nome || "Ezequiel Lobo";
  const primeiroNome = nomeCompleto.split(' ')[0];
  const restoNome = nomeCompleto.split(' ').slice(1).join(' ');

  return (
    <header id="home" className="min-h-screen flex items-center relative pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-enter">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1]">
              {primeiroNome} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-600">
                {restoNome}.
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-brand-red font-mono font-medium pt-2">
              &lt; Full Stack Developer /&gt;
            </h2>
          </div>
          
          <p className="text-gray-400 text-base border-l-4 border-brand-red/50 pl-4">
            {perfil?.bio || "Carregando biografia..."}
          </p>

          <div className="flex gap-4">
            {perfil?.cv && (
              <a href={perfil.cv} download className="bg-brand-red px-6 py-3 rounded-xl font-bold text-sm">
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative bg-white/5 p-2 rounded-2xl border border-white/10 w-64 md:w-80">
            <div className="relative overflow-hidden rounded-lg aspect-[4/5] bg-brand-card">
              {/* Só renderiza a imagem se a URL não for vazia */}
              {perfil?.foto ? (
                <Image 
                  src={perfil.foto} 
                  alt={nomeCompleto} 
                  fill 
                  className="object-cover"
                  priority 
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-600">Sem Foto</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}