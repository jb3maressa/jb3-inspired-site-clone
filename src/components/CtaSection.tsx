
import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="section relative overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579532536935-619928decd08?auto=format&fit=crop&q=80')" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-jb3-navy to-jb3-darkblue"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para otimizar seus investimentos?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Agende uma consulta gratuita com nossos especialistas e descubra como podemos ajudar você a alcançar seus objetivos financeiros.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className="btn-primary text-center">
              Agendar Consulta
            </Link>
            <Link to="/products" className="btn-outline text-center">
              Conhecer Produtos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
