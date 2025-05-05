
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80" 
              alt="JB3 Investimentos - Quem Somos" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          {/* Content */}
          <div>
            <h2 className="section-title">Quem Somos</h2>
            <p className="text-gray-700 mb-6">
              A <span className="text-jb3-navy font-semibold">JB3 Investimentos</span> é uma gestora de investimentos focada em resultados consistentes e duradouros, fundada por profissionais com ampla experiência no mercado financeiro.
            </p>
            <p className="text-gray-700 mb-6">
              Nossa equipe de especialistas trabalha incansavelmente para identificar oportunidades e desenvolver estratégias de investimento que maximizem os resultados dos nossos clientes, sempre com transparência e responsabilidade.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <AboutCard 
                number="12+" 
                text="Anos de experiência no mercado" 
              />
              <AboutCard 
                number="R$500M+" 
                text="Em ativos sob gestão" 
              />
              <AboutCard 
                number="2k+" 
                text="Clientes satisfeitos" 
              />
              <AboutCard 
                number="15+" 
                text="Especialistas financeiros" 
              />
            </div>
            
            <Link to="/about" className="btn-primary inline-flex">
              Conheça Nossa História
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ number, text }: { number: string; text: string }) => (
  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
    <h3 className="text-2xl font-bold text-jb3-gold mb-1">{number}</h3>
    <p className="text-jb3-navy">{text}</p>
  </div>
);

export default AboutSection;
