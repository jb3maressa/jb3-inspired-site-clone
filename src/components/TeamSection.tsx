
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';

const TeamSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title inline-block">Nossa Equipe</h2>
          <p className="text-gray-700 mt-4">
            Conheça os especialistas por trás da JB3 Investimentos, 
            profissionais com ampla experiência no mercado financeiro.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember 
            name="João Silva" 
            position="CEO e Fundador"
            bio="Com mais de 20 anos de experiência no mercado financeiro, liderou grandes instituições antes de fundar a JB3 Investimentos."
            imgUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
          />
          
          <TeamMember 
            name="Maria Oliveira" 
            position="Diretora de Investimentos"
            bio="Especialista em análise fundamental e gestão de carteiras, com passagem por grandes assets e bancos internacionais."
            imgUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
          />
          
          <TeamMember 
            name="Carlos Santos" 
            position="Head de Renda Fixa"
            bio="Economista com MBA em finanças e mais de 15 anos dedicados ao mercado de renda fixa nacional e internacional."
            imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
          />
        </div>
        
        <div className="text-center mt-10">
          <Link to="/team" className="btn-primary">
            Conheça Toda a Equipe
          </Link>
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ 
  name, 
  position, 
  bio, 
  imgUrl 
}: { 
  name: string; 
  position: string; 
  bio: string; 
  imgUrl: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md group">
    <div className="h-64 overflow-hidden relative">
      <img 
        src={imgUrl} 
        alt={name} 
        className="w-full h-full object-cover object-center transition-transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-jb3-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-white/20 backdrop-blur-sm p-2 rounded-full"
        >
          <Linkedin size={20} className="text-white" />
        </a>
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-jb3-navy">{name}</h3>
      <p className="text-jb3-gold font-medium mb-3">{position}</p>
      <p className="text-gray-600">{bio}</p>
    </div>
  </div>
);

export default TeamSection;
