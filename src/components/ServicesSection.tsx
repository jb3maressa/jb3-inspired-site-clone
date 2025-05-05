
import React from 'react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <section className="section navy-gradient text-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title text-white inline-block">
            Nossas Soluções de Investimento
          </h2>
          <p className="text-gray-300 mt-4">
            Oferecemos soluções personalizadas para cada perfil de investidor, 
            desde o mais conservador até o mais arrojado.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Renda Fixa" 
            description="Soluções para quem busca segurança e previsibilidade em seus investimentos, com rendimentos acima da média do mercado."
            imgUrl="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80"
            link="/products/fixed-income"
          />
          
          <ServiceCard 
            title="Renda Variável" 
            description="Estratégias de investimento em ações, FIIs e outros ativos variáveis para maximizar seus rendimentos a médio e longo prazo."
            imgUrl="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&q=80"
            link="/products/variable-income"
          />
          
          <ServiceCard 
            title="Fundos Exclusivos" 
            description="Fundos de investimento exclusivos para clientes com alto patrimônio, com estratégias personalizadas."
            imgUrl="https://images.unsplash.com/photo-1444653389962-8149286c578a?auto=format&fit=crop&q=80"
            link="/products/exclusive-funds"
          />
          
          <ServiceCard 
            title="Previdência Privada" 
            description="Planejamento para aposentadoria com benefícios fiscais e opções personalizadas para cada fase da vida."
            imgUrl="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&q=80"
            link="/products/pension"
          />
          
          <ServiceCard 
            title="Investimentos Internacionais" 
            description="Diversificação global para seu patrimônio, com acesso aos principais mercados mundiais."
            imgUrl="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80"
            link="/products/international"
          />
          
          <ServiceCard 
            title="Consultoria Personalizada" 
            description="Assessoria financeira completa para organizar suas finanças e alcançar seus objetivos de curto, médio e longo prazo."
            imgUrl="https://images.unsplash.com/photo-1556742077-0a6b6a198e55?auto=format&fit=crop&q=80"
            link="/products/advisory"
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-outline">
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ 
  title, 
  description, 
  imgUrl, 
  link 
}: { 
  title: string; 
  description: string; 
  imgUrl: string; 
  link: string;
}) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-8px]">
    <div className="h-48 overflow-hidden">
      <img 
        src={imgUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-jb3-gold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-jb3-gold hover:underline"
      >
        Saiba mais
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

export default ServicesSection;
