import React, { useState } from 'react';
import { 
  MapPin, 
  Instagram, 
  CheckCircle2, 
  ShieldCheck, 
  FileSearch, 
  UserCheck, 
  Sparkles
} from 'lucide-react';

import { EXPERT_INFO, IMAGES, RESULTS_GALLERY, FEATURES, STEPS } from './constants';
import { Button } from './components/Button';
import { Lightbox } from './components/Lightbox';
import { Section } from './components/Section';

const App: React.FC = () => {
  const [lightboxImage, setLightboxImage] = useState<{src: string, alt: string} | null>(null);

  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-brand-600" />,
    FileSearch: <FileSearch className="w-8 h-8 text-brand-600" />,
    UserCheck: <UserCheck className="w-8 h-8 text-brand-600" />,
    Sparkles: <Sparkles className="w-8 h-8 text-brand-600" />,
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden pb-20 md:pb-0">
      {/* Lightbox Component */}
      <Lightbox 
        isOpen={!!lightboxImage} 
        src={lightboxImage?.src || ''} 
        alt={lightboxImage?.alt || ''} 
        onClose={() => setLightboxImage(null)} 
      />

      {/* 1. HERO SECTION */}
      {/* Added 'bg-gold-gradient' for the top shadow effect requested */}
      <header id="hero" className="relative bg-gold-gradient pt-6 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Mobile: Image First */}
          <div className="w-full md:w-1/2 relative md:order-2">
            <div className="relative aspect-[4/5] w-full max-w-[400px] mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={IMAGES.hero} 
                alt={`Foto de ${EXPERT_INFO.name}`} 
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-900/80 to-transparent p-6 text-white md:hidden">
                <p className="font-script text-3xl">{EXPERT_INFO.name}</p>
                <p className="text-sm opacity-90 font-sans tracking-wide">{EXPERT_INFO.role}</p>
              </div>
            </div>
            
            {/* Floating Badge - Updated to Gold colors */}
            <div className="absolute -bottom-4 -right-2 md:bottom-8 md:-left-8 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 max-w-[200px] animate-in slide-in-from-bottom-5 duration-700 delay-300 border border-brand-100">
              <div className="bg-brand-50 p-2 rounded-full text-green-600">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-800">Sedação Consciente</p>
                <p className="text-xs text-slate-500">Sem dor ou medo</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 md:order-1 text-center md:text-left mt-8 md:mt-0">
            {/* Removed City Tag and 'Eu sou' prefix */}
            <h1 className="mb-6">
              <span className="text-brand-600 font-script text-6xl md:text-7xl lg:text-8xl block leading-tight">
                Dra. Joyce Guimarães
              </span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              Transformo sorrisos e devolvo autoestima. Especialista em Ortodontia e habilitada em sedação para um tratamento tranquilo.
            </p>
            <div className="w-full max-w-sm mx-auto md:mx-0">
              <Button />
            </div>
          </div>
        </div>
      </header>

      {/* 2. QUEM SOU EU */}
      <Section id="about" className="bg-white">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
             <div className="relative">
                {/* Changed abstract shape color to gold */}
                <div className="absolute inset-0 bg-brand-200 rounded-2xl transform rotate-3 opacity-30"></div>
                <img 
                  src={IMAGES.about} 
                  alt="Dra Joyce atendendo" 
                  className="relative rounded-2xl shadow-lg w-full object-cover aspect-square"
                />
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-6">
              Muito prazer, sou sua nova dentista.
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Acredito que cuidar do sorriso deve ser uma experiência leve, e não um momento de tensão.
              </p>
              <p>
                Minha missão em Cláudio é oferecer uma odontologia de alto nível, unindo técnica apurada e um olhar humano para cada paciente.
              </p>
              <ul className="space-y-3 mt-6">
                {EXPERT_INFO.specialties.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 shrink-0" />
                    <span className="font-medium text-slate-800">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS (GALERIA) */}
      <Section id="results" className="bg-slate-50">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-3">
            Resultados Reais
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Veja algumas transformações realizadas aqui no consultório.
            <br/><span className="text-xs opacity-70">*Os resultados variam de pessoa para pessoa.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {RESULTS_GALLERY.map((img, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => setLightboxImage(img)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-brand-900/40 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-brand-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  Ver Ampliado
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
           <Button text="Quero um resultado assim" variant="secondary" />
        </div>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section id="features" className="bg-white">
        <h2 className="font-serif text-3xl md:text-4xl text-slate-900 mb-10 text-center">
          Por que agendar comigo?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-brand-50 border border-brand-100 hover:border-brand-300 transition-colors flex items-start gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm border border-brand-100">
                {icons[feature.iconName]}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section id="cta-intermediate" dark className="text-center relative overflow-hidden bg-brand-900">
        {/* Abstract shapes bg */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-brand-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <h2 className="font-serif text-3xl md:text-4xl mb-4 relative z-10 text-white">
          Está com dor ou insatisfeito com seu sorriso?
        </h2>
        <p className="text-brand-100 text-lg mb-8 max-w-xl mx-auto relative z-10">
          Não deixe para depois. A primeira avaliação é o passo mais importante para recuperar sua saúde e confiança.
        </p>
        <div className="max-w-md mx-auto relative z-10">
          <Button variant="secondary" subtext="Fale diretamente com nossa equipe" />
        </div>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section id="steps" className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-slate-900">
            Sua primeira consulta é simples
          </h2>
          <p className="text-brand-600 font-medium mt-2">100% Gratuita • Sem Compromisso</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-0.5 bg-brand-200 -z-10"></div>

          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-white border-4 border-brand-200 text-brand-600 flex items-center justify-center text-2xl font-serif font-bold shadow-lg mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br from-white to-brand-50">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section id="cta-final" className="bg-white pb-24 md:pb-20">
        <div className="bg-gradient-to-br from-brand-700 to-brand-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl shadow-brand-900/20 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl mb-6">
              Vamos cuidar desse sorriso?
            </h2>
            <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
              Clique no botão abaixo e garanta sua avaliação gratuita. <br className="hidden md:block"/>
              Estou te esperando na Estrada dos Macacos, 361.
            </p>
            <div className="max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
              <Button variant="secondary" text="Quero Agendar Agora" />
            </div>
          </div>
        </div>
      </Section>

      {/* 9. RODAPÉ */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-script text-3xl text-brand-500 mb-1">{EXPERT_INFO.name}</h4>
            <p className="text-sm mb-2">{EXPERT_INFO.role}</p>
            <p className="text-xs opacity-70">{EXPERT_INFO.cro}</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-center md:text-right">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-brand-500" />
              <span>{EXPERT_INFO.address}</span>
            </div>
            <a 
              href={EXPERT_INFO.instagramLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-brand-400 transition-colors mt-2"
            >
              <Instagram size={16} />
              <span>Acompanhe no Instagram</span>
            </a>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-slate-800 text-center text-xs opacity-50">
          &copy; {new Date().getFullYear()} Dra. Joyce Guimarães. Todos os direitos reservados.
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Button fullWidth className="shadow-none" text="Agendar Avaliação Gratuita" subtext="" />
      </div>
    </div>
  );
};

export default App;