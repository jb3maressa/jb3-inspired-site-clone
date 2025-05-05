
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCta = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-jb3-navy rounded-xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Receba conteúdo exclusivo no seu e-mail
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Assine nossa newsletter e receba análises semanais, dicas de investimentos e conteúdos exclusivos diretamente no seu e-mail.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 px-4 py-3 rounded-md border-none focus:ring-2 focus:ring-jb3-gold focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-jb3-gold text-white px-6 py-3 rounded-md font-medium transition-all hover:bg-opacity-90"
              >
                Inscrever-se
              </button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4">
              Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-jb3-navy mb-6">
            Precisa de ajuda com seus investimentos?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossos especialistas estão prontos para ajudar você a alcançar seus objetivos financeiros com uma consultoria personalizada.
          </p>
          <Link to="/contact" className="bg-jb3-gold text-white px-8 py-3 rounded-md font-medium transition-all hover:bg-opacity-90 inline-block">
            Agendar Consulta
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogCta;
