
import React from 'react';

const BlogHeader = () => {
  return (
    <section className="relative py-20 md:py-28">
      {/* Background with Overlay */}
      <div className="absolute inset-0 bg-jb3-navy">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-4c4c0511cc88?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-jb3-navy/90 to-jb3-navy/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Blog <span className="text-jb3-gold">JB3</span> Investimentos
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Conteúdos exclusivos, análises de mercado e dicas de investimentos para você ficar sempre à frente.
          </p>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <StatCard 
              number="150+" 
              label="Artigos Publicados" 
            />
            <StatCard 
              number="20k+" 
              label="Leitores Mensais" 
            />
            <StatCard 
              number="15+" 
              label="Especialistas Contribuindo" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6">
    <h3 className="text-3xl font-bold text-jb3-gold mb-2">{number}</h3>
    <p className="text-white font-medium">{label}</p>
  </div>
);

export default BlogHeader;
