"use client";
import { motion } from "framer-motion";
import { Projeto } from "@/types";
import Image from "next/image";

export default function ProjectSlider({ projetos = [] }: { projetos: Projeto[] }) {
  if (!projetos || projetos.length === 0) {
    return <div className="text-center py-10 text-gray-500">Nenhum projeto encontrado.</div>;
  }

  return (
    <div className="relative overflow-hidden py-10">
      <motion.div 
        className="flex gap-12 px-[10vw] md:px-[30vw]"
        drag="x"
        dragConstraints={{ left: -1500, right: 0 }}
      >
        {projetos.map((projeto) => (
          <motion.div
            key={projeto.id}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.5, scale: 0.9 }}
            className="shrink-0 w-80 md:w-96 bg-[#0F0F0F] rounded-3xl overflow-hidden border border-white/5"
          >
            <div className="h-52 relative bg-gray-900">
              {projeto.capa ? (
                <Image src={projeto.capa} alt={projeto.titulo} fill unoptimized className="object-cover" />
              ) : (
                <div className="flex items-center justify-center h-full text-xs text-gray-700">Sem Capa</div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">{projeto.titulo}</h3>
              <p className="text-gray-400 text-sm mt-2 line-clamp-2">{projeto.descricao}</p>
              <div className="flex gap-2 mt-4 flex-wrap">
                {projeto.tecnologia?.split(',').map(t => (
                  <span key={t} className="text-[10px] text-brand-red border border-brand-red/20 px-2 py-1 rounded-full bg-brand-red/5">
                    {t.trim()}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}