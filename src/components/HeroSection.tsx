
import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-jb3-navy">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-jb3-navy/90 to-jb3-darkblue/70"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Investimentos <span className="text-jb3-gold">Inteligentes</span> para o Seu Futuro
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Expertise financeira personalizada para maximizar seus investimentos e alcançar seus objetivos com segurança e rentabilidade.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/invest" className="btn-primary text-center">
              Comece a Investir
            </Link>
            <Link to="/contact" className="btn-outline text-center">
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-jb3-gold text-sm mb-2">Saiba Mais</span>
        <div className="w-6 h-10 border-2 border-jb3-gold rounded-full flex justify-center">
          <span className="block w-1.5 h-1.5 bg-jb3-gold rounded-full mt-2 animate-pulse"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
